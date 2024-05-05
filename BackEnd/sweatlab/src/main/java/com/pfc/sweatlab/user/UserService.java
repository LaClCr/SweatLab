package com.pfc.sweatlab.user;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pfc.sweatlab.routine.model.Routine;
import com.pfc.sweatlab.user.model.LoginDto;
import com.pfc.sweatlab.user.model.User;

@Service
@Transactional
public class UserService {

	@Autowired
	private UserRepository userRepository;

	
	/**
     * Recupera un {@link User} a partir de su ID
     *
     * @param id ID del usuario
     * @return Usuario correspondiente al ID proporcionado, o null si no se encuentra
     */
	public User get(Long id) {
		return this.userRepository.findById(id).orElse(null);
	}
	
	/**
	 * Encuentra un usuario por su correo electrónico
	 *
	 * @param email Correo electrónico del usuario
	 * @return Usuario correspondiente al correo electrónico proporcionado, o null si no se encuentra
	 */
	public User findByEmail(String email) {
	    return this.userRepository.findByEmail(email);
	}

	/**
     * Recupera todos los usuarios
     *
     * @return Lista de todos los usuarios
     */
	public List<User> findAll() {
		return (List<User>) userRepository.findAll();
	}

	
	/**
     * Guarda o actualiza un usuario
     *
     * @param id  ID del usuario a actualizar. Si es null, se crea un nuevo usuario.
     * @param dto Datos del usuario a guardar o actualizar
     * @return ResponseEntity que indica el resultado de la operación
     */
	public ResponseEntity<String> saveOrUpdate(Long id, User dto) {

		User user;

		if (id == null) {

			User existingUserWithEmail = this.userRepository.findByEmail(dto.getEmail());
			if (existingUserWithEmail != null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("El correo electrónico ya está en uso");
			}

			user = new User();
			BeanUtils.copyProperties(dto, user, "id");
			user.setPassword(this.hashPassword(dto.getPassword()));
			this.userRepository.save(user);
			return ResponseEntity.ok("Usuario creado correctamente");

		} else {

			user = this.get(id);

			if (user == null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("El ID no pertenece a ningún usuario.");
			} else {

				user.setDateOfBirth(dto.getDateOfBirth());
				if (!user.getEmail().equals(dto.getEmail())) {
					user.setEmail(dto.getEmail());
				}
				user.setHeight(dto.getHeight());
				user.setLastName(dto.getLastName());
				user.setName(dto.getName());
				user.setWeight(dto.getWeight());
				user.setPassword(this.hashPassword(dto.getPassword()));
				
				this.userRepository.save(user);
				return ResponseEntity.ok("Usuario actualizado correctamente");
			}

		}

	}

	/**
     * Elimina un usuario por su ID
     *
     * @param id ID del usuario a eliminar
     * @return ResponseEntity que indica el resultado de la operación
     */
	public ResponseEntity<String> deleteById(Long id) {
		User user = this.get(id);
		if (user == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El usuario con ID " + id + " no existe.");
		} else {
			List<Routine> userRoutines = user.getRoutines();
		    if (!userRoutines.isEmpty()) {
		        userRoutines.clear();
		        userRepository.save(user);
		    }
			userRepository.deleteById(id);
			return ResponseEntity.ok("Usuario eliminado correctamente");
		}
	}
	
	
	/**
     * Realiza el inicio de sesión de un usuario
     *
     * @param dto Datos de inicio de sesión del usuario
     * @return ResponseEntity que indica el resultado del inicio de sesión
     */
	public ResponseEntity<String> login(LoginDto dto) {
		
		String email = dto.getEmail();
		String password = dto.getPassword();
		
	    User user = userRepository.findByEmail(email);
	    
	    if (user == null) {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Correo electrónico no registrado");
	    } else {
	        String hashedPassword = hashPassword(password);
	        if (hashedPassword.equals(user.getPassword())) {
	            return ResponseEntity.ok("Inicio de sesión exitoso");
	        } else {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Contraseña incorrecta");
	        }
	    }
	}


	// -------------VALIDATION METHODS--------------------

	/**
	 * Genera un hash de contraseña utilizando el algoritmo SHA-256.
	 *
	 * @param password Contraseña a ser hasheada
	 * @return El hash resultante de la contraseña, o null si ocurre una excepción
	 */
	private String hashPassword(String password) {
		try {
			MessageDigest digest = MessageDigest.getInstance("SHA-256");
			byte[] hashedBytes = digest.digest(password.getBytes());
			StringBuilder hexString = new StringBuilder();
			for (byte hashedByte : hashedBytes) {
				String hex = Integer.toHexString(0xff & hashedByte);
				if (hex.length() == 1)
					hexString.append('0');
				hexString.append(hex);
			}
			return hexString.toString();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			return null;
		}
	}

}
