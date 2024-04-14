package com.pfc.sweatlab.exercise;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pfc.sweatlab.exercise.model.Exercise;

@Service
public class ExerciseService {

	@Autowired
	ExerciseRepository exerciseRepository;

	public Exercise get(Long id) {

        return this.exerciseRepository.findById(id).orElse(null);
    }
	
	public List<Exercise> findAll() {

		return (List<Exercise>) this.exerciseRepository.findAll();
	}

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

	public void delete(Long id) throws Exception {

		if (this.get(id) == null) {
			throw new Exception("Not exists");
		}

		this.exerciseRepository.deleteById(id);
	}
}
