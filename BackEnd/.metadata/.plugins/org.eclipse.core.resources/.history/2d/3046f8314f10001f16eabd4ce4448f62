package com.pfc.sweatlab.routine;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pfc.sweatlab.exercise.model.Exercise;
import com.pfc.sweatlab.routine.model.Routine;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;


import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "Routine", description = "API of Routine")
@RequestMapping(value = "/routine")
@RestController
@CrossOrigin(origins = "*")
public class RoutineController {

	@Autowired
	RoutineService routineService;
	
	/**
     * Método para obtener todas las rutinas de un usuario.
     *
     * @param userId ID del usuario
     * @return Lista de rutinas del usuario
     */
    @RequestMapping(path = "/{userId}", method = RequestMethod.GET)
    public List<Routine> findAllByUserId(@PathVariable("userId") Long userId) {
        return this.routineService.findAllByUserId(userId);
    }

	/**
	 * Método para crear una rutina para un usuario.
	 *
	 * @param userId    ID del usuario al que se asociará la rutina
	 * @param routineId ID de la rutina que se actualizará (si es nulo, se añadirá
	 *                  una nueva rutina)
	 * @param routine   Datos de la rutina a guardar o actualizar
	 */
	@RequestMapping(path = "/{userId}", method = RequestMethod.PUT)
	public ResponseEntity<String> saveUserRoutine(@PathVariable("userId") Long userId,
			@RequestBody Routine routine) {
		return this.routineService.saveUserRoutine(userId, routine);
	}
	
	/**
	 * Método para actualizar una rutina para un usuario.
	 *
	 * @param userId    ID del usuario al que se asociará la rutina
	 * @param routineId ID de la rutina que se actualizará (si es nulo, se añadirá
	 *                  una nueva rutina)
	 * @param routine   Datos de la rutina a guardar o actualizar
	 */
	@RequestMapping(path = "/{userId}/{routineId}", method = RequestMethod.PUT)
	public ResponseEntity<String> updateUserRoutine(@PathVariable("userId") Long userId,
			@PathVariable("routineId") Long routineId, @RequestBody Routine routine) {
		return this.routineService.updateUserRoutine(userId, routine, routineId);
	}

	/**
	 * Método para eliminar una rutina de un usuario.
	 *
	 * @param userId    ID del usuario del que se eliminará la rutina
	 * @param routineId ID de la rutina a eliminar
	 * @return {@link User} con la rutina eliminada, o null si el usuario no existe
	 */
	@RequestMapping(path = "/{userId}/{routineId}", method = RequestMethod.DELETE)
	public ResponseEntity<String> removeUserRoutine(@PathVariable("userId") Long userId,
			@PathVariable("routineId") Long routineId) {
		return this.routineService.removeUserRoutine(userId, routineId);
	}
	
	/**
	 * Agrega un nuevo ejercicio a una rutina específica de un usuario.
	 *
	 * @param userId     ID del usuario.
	 * @param routineId  ID de la rutina a la que se agregará el ejercicio.
	 * @param exercise   El ejercicio a agregar.
	 * @return           ResponseEntity con un mensaje indicando el resultado de la operación.
	 */
	@RequestMapping(path = "/exercise/{userId}/{routineId}", method = RequestMethod.PUT)
	public ResponseEntity<String> addExercise(@PathVariable("userId") Long userId,
	        @PathVariable("routineId") Long routineId, @RequestBody Exercise exercise) {
	    return this.routineService.addExercise(userId, routineId, exercise);
	}

	/**
	 * Actualiza un ejercicio existente en una rutina específica de un usuario.
	 *
	 * @param userId      ID del usuario.
	 * @param routineId   ID de la rutina a la que pertenece el ejercicio.
	 * @param exerciseId  ID del ejercicio a actualizar.
	 * @param exercise    Los datos actualizados del ejercicio.
	 * @return            ResponseEntity con un mensaje indicando el resultado de la operación.
	 */
	@RequestMapping(path = "/exercise/{userId}/{routineId}/{exerciseId}", method = RequestMethod.PUT)
	public ResponseEntity<String> updateExercise(@PathVariable("userId") Long userId,
	        @PathVariable("routineId") Long routineId, @PathVariable("exerciseId") Long exerciseId,
	        @RequestBody Exercise exercise) {
	    return this.routineService.updateExercise(userId, routineId, exercise);
	}

	/**
	 * Elimina un ejercicio de una rutina específica de un usuario.
	 *
	 * @param userId      ID del usuario.
	 * @param routineId   ID de la rutina de la que se eliminará el ejercicio.
	 * @param exerciseId  ID del ejercicio a eliminar.
	 * @return            ResponseEntity con un mensaje indicando el resultado de la operación.
	 */
	@RequestMapping(path = "/exercise/{userId}/{routineId}/{exerciseId}", method = RequestMethod.DELETE)
	public ResponseEntity<String> removeExercise(@PathVariable("userId") Long userId,
	        @PathVariable("routineId") Long routineId, @PathVariable("exerciseId") Long exerciseId) {
	    return this.routineService.removeExercise(userId, routineId, exerciseId);
	}

	/**
	 * Obtiene la lista de ejercicios de una rutina específica de un usuario.
	 *
	 * @param userId     ID del usuario.
	 * @param routineId  ID de la rutina de la que se obtendrán los ejercicios.
	 * @return           ResponseEntity con la lista de ejercicios o un mensaje indicando el resultado de la operación.
	 */
	@RequestMapping(path = "/exercise/{userId}/{routineId}", method = RequestMethod.GET)
	public ResponseEntity<List<Exercise>> getExercises(@PathVariable("userId") Long userId,
	        @PathVariable("routineId") Long routineId) {
	    return this.routineService.getExercises(userId, routineId);
	}

}