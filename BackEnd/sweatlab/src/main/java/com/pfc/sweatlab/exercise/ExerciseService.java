package com.pfc.sweatlab.exercise;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pfc.sweatlab.exercise.model.Exercise;

@Service
public class ExerciseService {

    @Autowired
    ExerciseRepository exerciseRepository;

    /**
     * Recupera un ejercicio por su ID.
     *
     * @param id ID del ejercicio a recuperar
     * @return El ejercicio correspondiente al ID proporcionado, o null si no se encuentra
     */
    public Exercise get(Long id) {
        return this.exerciseRepository.findById(id).orElse(null);
    }

    /**
     * Recupera todos los ejercicios.
     *
     * @return Una lista de todos los ejercicios
     */
    public List<Exercise> findAll() {
        return (List<Exercise>) this.exerciseRepository.findAll();
    }

    /**
     * Guarda un nuevo ejercicio o actualiza uno existente.
     *
     * @param id ID del ejercicio a actualizar. Si es null, se crea un nuevo ejercicio.
     * @param ex Datos del ejercicio a guardar o actualizar
     */
    public void save(Long id, Exercise ex) {

        Exercise exercise;

        if (id == null) {
            exercise = new Exercise();
        } else {
            exercise = this.get(id);
        }

        exercise.setName(ex.getName());
        exercise.setImage(ex.getImage());
        exercise.setMuscularGroup(ex.getMuscularGroup());

        this.exerciseRepository.save(exercise);
    }

    /**
     * Elimina un ejercicio por su ID.
     *
     * @param id ID del ejercicio a eliminar
     * @throws Exception si el ejercicio no existe
     */
    public void delete(Long id) throws Exception {

        if (this.get(id) == null) {
            throw new Exception("Not exists");
        }

        this.exerciseRepository.deleteById(id);
    }
}
