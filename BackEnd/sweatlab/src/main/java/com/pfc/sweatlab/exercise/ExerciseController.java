package com.pfc.sweatlab.exercise;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import com.pfc.sweatlab.exercise.model.Exercise;

@Tag(name = "Exercise", description = "API of Exercise")
@RequestMapping(value = "/exercise")
@RestController
@CrossOrigin(origins = "*")
public class ExerciseController {

	@Autowired
	ExerciseService exerciseService;

	/**
	 * Método para recuperar todos los ejercicios
	 *
	 * @return {@link List} de {@link Exercise}
	 */
	@Operation(summary = "Find", description = "Method that return a list of Exercises")
	@RequestMapping(path = "", method = RequestMethod.GET)
	public List<Exercise> findAll() {

		return this.exerciseService.findAll();
	}

	/**
	 * Método para crear o actualizar un ejercicio
	 *
	 * @param id PK de la entidad
	 * @param ex datos de la entidad
	 */
	@Operation(summary = "Save or Update", description = "Method that saves or updates an Exercise")
	@RequestMapping(path = { "", "/{id}" }, method = RequestMethod.PUT)
	public void save(@PathVariable(name = "id", required = false) Long id, @RequestBody Exercise ex) {

		this.exerciseService.save(id, ex);
	}

	/**
	 * Método para borrar un ejercicio
	 *
	 * @param id PK de la entidad
	 * @throws Exception
	 */
	@Operation(summary = "Delete", description = "Method that deletes an Exercise")
	@RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("id") Long id) throws Exception {

		this.exerciseService.delete(id);
	}
}
