package com.pfc.sweatlab.routine;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pfc.sweatlab.exercise.model.Exercise;
import com.pfc.sweatlab.routine.model.Routine;
import com.pfc.sweatlab.user.UserService;
import com.pfc.sweatlab.user.model.User;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Service
@Transactional
public class RoutineService {

    @Autowired
    private RoutineRepository routineRepository;

    @Autowired
    private UserService userService;
    
    
    /**
     * Encuentra todas las rutinas de ejercicios asociadas a un usuario por su ID.
     *
     * @param userId ID del usuario
     * @return Lista de rutinas de ejercicios asociadas al usuario
     */
    public List<Routine> findAllByUserId(Long userId) {
        return routineRepository.findAllByUserId(userId);
    }

    /**
     * Guarda una rutina de ejercicios para un usuario.
     *
     * @param userId  ID del usuario
     * @param routine Rutina de ejercicios a guardar
     * @return ResponseEntity con el resultado de la operación
     */
    public ResponseEntity<Object> saveUserRoutine(Long userId, Routine routine) {
        User user = this.userService.get(userId);

        if (user != null) {
            routine.setUser(user);
            Routine savedRoutine = this.routineRepository.save(routine);
            Long routineId = savedRoutine.getId();
            String successMessage = "Rutina añadida correctamente";
            return ResponseEntity.ok().body(Map.of("message", successMessage, "routineId", routineId));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El usuario con ID " + userId + " no existe.");
        }
    }

    
    /**
     * Actualiza una rutina de ejercicios para un usuario.
     *
     * @param userId    ID del usuario
     * @param routine   Nueva información de la rutina de ejercicios
     * @param routineId ID de la rutina de ejercicios a actualizar
     * @return ResponseEntity con el resultado de la operación
     */
    public ResponseEntity<String> updateUserRoutine(Long userId, Routine routine, Long routineId) {

        User user = this.userService.get(userId);

        if (user != null) {

            Routine existingRoutine = this.routineRepository.findById(routineId).orElse(null);
            if (existingRoutine != null) {

                existingRoutine.setName(routine.getName()); 

                this.routineRepository.save(existingRoutine);

                return ResponseEntity.ok("Rutina actualizada correctamente");

            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La rutina con ID " + routineId + " no existe.");
            }

        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El usuario con ID " + userId + " no existe.");
        }
    }

    /**
     * Elimina una rutina de ejercicios para un usuario.
     *
     * @param userId    ID del usuario
     * @param routineId ID de la rutina de ejercicios a eliminar
     * @return ResponseEntity con el resultado de la operación
     */
    public ResponseEntity<String> removeUserRoutine(Long userId, Long routineId) {

        User user = this.userService.get(userId);

        if (user != null) {
            Routine routineToRemove = this.routineRepository.findById(routineId).orElse(null);
            if (routineToRemove != null) {
                this.routineRepository.delete(routineToRemove); 
                return ResponseEntity.ok("Rutina eliminada correctamente");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La rutina con ID " + routineId + " no existe.");
            }
        }else {
        	return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El usuario con ID " + userId + " no existe.");
        }
    }
    
    /**
     * Agrega un ejercicio a una rutina de ejercicios existente.
     *
     * @param userId    ID del usuario
     * @param routineId ID de la rutina de ejercicios
     * @param exercise  Ejercicio a agregar
     * @return ResponseEntity con el resultado de la operación
     */
    public ResponseEntity<String> addExercise(Long userId, Long routineId, Exercise exercise) {
        User user = this.userService.get(userId);
        if(user != null) {
        	Routine routine = this.routineRepository.findById(routineId).orElse(null);
        	if(routine != null) {
        		List<Exercise> exerciseList = routine.getExercises();
        		exerciseList.add(exercise);
        		this.routineRepository.save(routine);
        		return ResponseEntity.ok("Ejercicio añadido correctamente a la rutina con ID " + routineId);
        	}else {
        		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La rutina con ID " + routineId + " no existe.");
        	}
        }else {
        	return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El usuario con ID " + userId + " no existe.");
        }
    }

    /**
     * Actualiza un ejercicio en una rutina de ejercicios existente.
     *
     * @param userId    ID del usuario
     * @param routineId ID de la rutina de ejercicios
     * @param exercise  Ejercicio a actualizar
     * @return ResponseEntity con el resultado de la operación
     */
    public ResponseEntity<String> updateExercise(Long userId, Long routineId, Exercise exercise) {
    	User user = this.userService.get(userId);
        if(user != null) {
        	Routine routine = this.routineRepository.findById(routineId).orElse(null);
        	if(routine != null) {
        		List<Exercise> exerciseList = routine.getExercises();
        		for (Exercise elem : exerciseList) {
					if(elem.getId() == exercise.getId()) {
						elem.setImage(exercise.getImage());
						elem.setMuscularGroup(exercise.getMuscularGroup());
						elem.setName(exercise.getName());
						elem.setReps(exercise.getReps());
						elem.setWeight(exercise.getWeight());
						
						this.routineRepository.save(routine);
						return ResponseEntity.ok("Ejercicio con ID " + exercise.getId() + " actualizado correctamente");
					}
				}
        		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El ejercicio con ID " + exercise.getId() + " no existe.");
        	}else {
        		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La rutina con ID " + routineId + " no existe.");
        	}
        }else {
        	return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El usuario con ID " + userId + " no existe.");
        }
    }

    /**
     * Elimina un ejercicio de una rutina de ejercicios existente.
     *
     * @param userId     ID del usuario
     * @param routineId  ID de la rutina de ejercicios
     * @param exerciseId ID del ejercicio a eliminar
     * @return ResponseEntity con el resultado de la operación
     */
    public ResponseEntity<String> removeExercise(Long userId, Long routineId, Long exerciseId) {
    	User user = this.userService.get(userId);
        if(user != null) {
        	Routine routine = this.routineRepository.findById(routineId).orElse(null);
        	if(routine != null) {
        		List<Exercise> exerciseList = routine.getExercises();
        		for (Exercise elem : exerciseList) {
					if(elem.getId() == exerciseId) {
						exerciseList.remove(elem);
						this.routineRepository.save(routine);
						return ResponseEntity.ok("Ejercicio con ID " + exerciseId + " eliminado correctamente");
					}
				}
        		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El ejercicio con ID " + exerciseId + " no existe.");
        	}else {
        		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La rutina con ID " + routineId + " no existe.");
        	}
        }else {
        	return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El usuario con ID " + userId + " no existe.");
        }
    }

    /**
     * Obtiene todos los ejercicios de una rutina de ejercicios.
     *
     * @param userId    ID del usuario
     * @param routineId ID de la rutina de ejercicios
     * @return ResponseEntity con la lista de ejercicios de la rutina
     */
    public ResponseEntity<List<Exercise>> getExercises(Long userId, Long routineId) {
        User user = this.userService.get(userId);
        Routine routine = this.routineRepository.findById(routineId).orElse(null);
        
        if (user != null && routine != null) {
            List<Exercise> exercises = routine.getExercises();
            return ResponseEntity.ok(exercises);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
