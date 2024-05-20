package com.pfc.sweatlab.user;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import com.pfc.sweatlab.user.model.LoginDto;
import com.pfc.sweatlab.user.model.User;

@Tag(name = "User", description = "API of User")
@RequestMapping(value = "/user")
@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    UserService userService;

    /**
     * Método para recuperar todos los usuarios
     *
     * @return {@link List} de {@link User}
     */
    @Operation(summary = "Find All", description = "Method that returns a list of Users")
    @RequestMapping(path = "", method = RequestMethod.GET)
    public List<User> findAll() {
        return (List<User>) userService.findAll();
    }

    /**
     * Método para buscar un usuario por su ID
     *
     * @param id ID del usuario
     * @return {@link User} si se encuentra, o un {@link Optional} vacío si no se encuentra
     */
    @Operation(summary = "Find By ID", description = "Method that returns a User by ID")
    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public User findById(@PathVariable("id") Long id) {
        return userService.get(id);
    }

    
    /**
     * Método para buscar un usuario por su correo electrónico
     *
     * @param email Correo electrónico del usuario
     * @return {@link User} si se encuentra, o un {@link ResponseEntity} con un mensaje de error si no se encuentra
     */
    @Operation(summary = "Find By Email", description = "Method that returns a User by Email")
    @RequestMapping(path = "/email/{email}", method = RequestMethod.GET)
    public ResponseEntity<?> findByEmail(@PathVariable("email") String email) {
        User user = userService.findByEmail(email);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario con el correo electrónico " + email + " no encontrado");
        }
    }

    
    /**
     * Método para crear o actualizar un usuario.
     *
     * @param id   ID del usuario. (Opcional para la actualización, se omite en caso de creación de usuario)
     * @param user Datos del usuario.
     * @return ResponseEntity con el resultado de la operación.
     */
    @Operation(summary = "Guardar o actualizar", description = "Método que guarda o actualiza un usuario.")
    @RequestMapping(path = { "", "/{id}" }, method = RequestMethod.PUT)
    public ResponseEntity<String> saveOrUpdate(@PathVariable(name = "id", required = false) Long id, @RequestBody User user) {
        return userService.saveOrUpdate(id, user);
    }
    
    /**
     * Método para borrar un usuario por su ID
     *
     * @param id ID del usuario
     * @throws Exception si el usuario no se encuentra
     */
    @Operation(summary = "Delete", description = "Method that deletes a User by ID")
    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<String> deleteById(@PathVariable("id") Long id) throws Exception {
        return userService.deleteById(id);
    }
    
    
    
    /**
     * Método para realizar el inicio de sesión de un usuario.
     * 
     * @param loginDto Datos de inicio de sesión del usuario.
     * @return ResponseEntity que indica el resultado del inicio de sesión.
     */
    @Operation(summary = "Login", description = "Method that performs user login")
    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public ResponseEntity<String> login(@RequestBody LoginDto loginDto) {
        ResponseEntity<String> response = userService.login(loginDto);
        return response;
    }


}

