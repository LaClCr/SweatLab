package com.pfc.sweatlab.routine;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pfc.sweatlab.routine.model.Routine;

@Repository
public interface RoutineRepository extends CrudRepository<Routine, Long> {

	@Query("SELECT r FROM Routine r WHERE r.user.id = :userId")
    List<Routine> findAllByUserId(@Param("userId") Long userId);
}