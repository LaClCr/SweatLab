//package com.pfc.sweatlab.routine.model;
//
//import java.util.List;
//
//import com.pfc.sweatlab.exercise.model.Exercise;
//import com.pfc.sweatlab.user.model.User;
//
//import jakarta.persistence.*;
//@Entity
//@Table(name = "routine")
//public class Routine {
//
//	@Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id", nullable = false)
//    private Long id;
//	
//	@Column(name = "name", nullable = false)
//    private String name;
//	
//	@ManyToOne
//    @JoinColumn(name = "user_id", nullable = false)
//    private User user;
//	
//	@OneToMany
//    @JoinColumn(name = "exercises", nullable = false) 
//    private List<Exercise> exercises;
//
//	public Long getId() {
//		return id;
//	}
//
//	public void setId(Long id) {
//		this.id = id;
//	}
//
//	public String getName() {
//		return name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}
//
//	public User getUser() {
//		return user;
//	}
//
//	public void setUser(User user) {
//		this.user = user;
//	}
//
//	public List<Exercise> getExercises() {
//		return exercises;
//	}
//
//	public void setExercises(List<Exercise> exercises) {
//		this.exercises = exercises;
//	}
//	
//	
//	
//}
