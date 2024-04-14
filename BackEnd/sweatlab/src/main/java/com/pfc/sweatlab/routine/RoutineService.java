package com.pfc.sweatlab.routine;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pfc.sweatlab.exercise.model.Exercise;
import com.pfc.sweatlab.routine.model.Routine;
import com.pfc.sweatlab.user.UserService;
import com.pfc.sweatlab.user.model.User;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Service
@Transactional
public class RoutineService {

    @Autowired
    private RoutineRepository routineRepository;

    @Autowired
    private UserService userService;

    public List<Routine> findAllByUserId(Long userId) {
        return routineRepository.findAllByUserId(userId);
    }

    public ResponseEntity<String> saveUserRoutine(Long userId, Routine routine) {

        User user = this.userService.get(userId);

        if (user != null) {

            routine.setUser(user);
            this.routineRepository.save(routine); 

            return ResponseEntity.ok("Rutina añadida correctamente");

        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El usuario con ID " + userId + " no existe.");
        }
    }

    public ResponseEntity<String> updateUserRoutine(Long userId, Routine routine, Long routineId) {

        User user = this.userService.get(userId);

        if (user != null) {

            Routine existingRoutine = this.routineRepository.findById(routineId).orElse(null);
            if (existingRoutine != null) {

                existingRoutine.setName(routine.getName()); 
                existingRoutine.setExercises(routine.getExercises()); 

                this.routineRepository.save(existingRoutine);

                return ResponseEntity.ok("Rutina actualizada correctamente");

            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La rutina con ID " + routineId + " no existe.");
            }

        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El usuario con ID " + userId + " no existe.");
        }
    }

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
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El usuario con ID " + userId + " no existe.");
    }
    
    public ResponseEntity<String> addExercise(Long userId, Long routineId, Exercise exercise) {
        // Implementar lógica para agregar un ejercicio a una rutina
        return ResponseEntity.ok("Ejercicio agregado correctamente a la rutina");
    }

    public ResponseEntity<String> updateExercise(Long userId, Long routineId, Long exerciseId, Exercise exercise) {
        // Implementar lógica para actualizar un ejercicio en una rutina
        return ResponseEntity.ok("Ejercicio actualizado correctamente en la rutina");
    }

    public ResponseEntity<String> removeExercise(Long userId, Long routineId, Long exerciseId) {
        // Implementar lógica para eliminar un ejercicio de una rutina
        return ResponseEntity.ok("Ejercicio eliminado correctamente de la rutina");
    }

    public ResponseEntity<List<Exercise>> getExercises(Long userId, Long routineId) {
        // Implementar lógica para obtener todos los ejercicios de una rutina
        return ResponseEntity.ok(List.of(new Exercise())); // Ejemplo de respuesta con un ejercicio ficticio
    }
}
