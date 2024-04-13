package com.pfc.sweatlab.exercise;

import org.springframework.data.repository.CrudRepository;

import com.pfc.sweatlab.exercise.model.Exercise;


public interface ExerciseRepository extends CrudRepository<Exercise, Long> {
}
