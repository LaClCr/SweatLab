package com.pfc.sweatlab.exercise.model;
import jakarta.persistence.*;

@Entity
@Table(name = "exercise")
public class Exercise {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
	
	@Column(name = "name", nullable = false)
    private String name;
	
	@Column(name = "image", nullable = false)
    private String image;
	
	@Column(name = "muscular_group", nullable = true)
    private String muscularGroup;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getMuscularGroup() {
		return muscularGroup;
	}

	public void setMuscularGroup(String muscularGroup) {
		this.muscularGroup = muscularGroup;
	}

	
}
