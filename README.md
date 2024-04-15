<div align="center">
  <h1>SweatLab</h1>
  <img src="https://github.com/LaClCr/SweatLab/blob/main/Brand/SweatLab_Logo_APP.png" width=300, height=300 alt="VOTAPP Logo"/>
</div>
  
# Realizado por:

| [<img src="https://github.com/LaClCr/Portafolio/blob/main/image3.jpeg" width=115><br><sub>Laia Clemente Crespo</sub>](https://github.com/LaClCr) |
| :---: |

# Sobre este Proyecto:
<h4 align="center">
:construction: Proyecto en construcción :construction:
</h4>
Presentada como mi trabajo de final de ciclo (TFC), SweatLab es una aplicación móvil diseñada para ayudarte a planificar, registrar y seguir tus rutinas de entrenamiento personalizadas. Con una interfaz intuitiva y características innovadoras, SweatLab te permite crear y gestionar tus rutinas de entrenamiento, registrar tu progreso y mantener un seguimiento de tus logros fitness.

# Backend
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.2.4-green.svg)](https://spring.io/projects/spring-boot)
[![JDK](https://img.shields.io/badge/JDK-21-orange.svg)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)

Este proyecto de backend se basa en Spring Boot 3.2.4, un marco de trabajo de desarrollo de aplicaciones Java que facilita la creación de aplicaciones Spring con una configuración mínima. Utiliza Maven como sistema de gestión de proyectos y JDK 21 como versión del lenguaje Java.

## Base de Datos
[![H2 Database](https://img.shields.io/badge/H2_Database-Latest-blue.svg)](https://www.h2database.com/html/main.html)

Se utiliza una base de datos H2 embebida en el servidor. Las tablas de la base de datos se generan a partir de los modelos de entidad (Entity) definidos en el proyecto.

## Estructura del Proyecto

La estructura del proyecto se organiza siguiendo las convenciones de un proyecto Spring Boot estándar. Incluye los siguientes paquetes principales:

* `com.pfc.sweatlab` -> Raíz del paquete que contiene toda la lógica del proyecto.
* `com.pfc.sweatlab.routine` y `com.pfc.sweatlab.routine.model` -> Contienen las clases relacionadas con las rutinas de entrenamiento.
* `com.pfc.sweatlab.exercise` y `com.pfc.sweatlab.exercise.model` -> Contienen las clases relacionadas con los ejercicios.
* `com.pfc.sweatlab.user` y `com.pfc.sweatlab.user.model`-> Contienen las clases relacionadas con los usuarios.


## Configuración

La configuración del proyecto se realiza principalmente a través de anotaciones y archivos de configuración en el paquete raíz.

### Archivos de Configuración

* `data.sql`Este archivo se utiliza para inicializar la base de datos con datos predefinidos. Puedes encontrar el código [aquí](https://github.com/Florida2DAM/pfc-23-24-LaClCr/blob/BackEnd/BackEnd/sweatlab/src/main/resources/data.sql).

* `application.properties` Este archivo de propiedades permite configurar diversos aspectos de la aplicación, como la configuración de la base de datos, las propiedades de seguridad y más. Puedes encontrar el código [aquí](https://github.com/Florida2DAM/pfc-23-24-LaClCr/blob/BackEnd/BackEnd/sweatlab/src/main/resources/application.properties).

### Clases de Configuración

* `ModelMapperConfig` Esta clase de configuración proporciona un bean para la instancia de ModelMapper. ModelMapper es una biblioteca de mapeo de objetos Java que realiza la asignación entre objetos de manera automática, basándose en convenciones y reglas configurables. Simplifica el proceso de mapeo entre objetos DTO (Data Transfer Object) y entidades de dominio. Puedes encontrar el código [aquí](https://github.com/Florida2DAM/pfc-23-24-LaClCr/blob/BackEnd/BackEnd/sweatlab/src/main/java/com/pfc/sweatlab/config/ModelMapperConfig.java).



# Frontend
(Sin completar)



