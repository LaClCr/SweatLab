<div align="center">
  <img src="https://github.com/LaClCr/SweatLab/blob/main/Brand/banner.png"/>
</div>
<br>

# Índice
- [Realizado por](#realizado-por)
- [Sobre este Proyecto](#sobre-este-proyecto)
- [Backend](#backend)
    - [Base de Datos](#base-de-datos)
    - [Estructura del Proyecto](#estructura-del-proyecto)
    - [Configuración](#configuración)
        - [Archivos de Configuración](#archivos-de-configuración)
        - [Clases de Configuración](#clases-de-configuración)
    - [Peticiones a la API](#peticiones-a-la-api)
        - [Para User](#para-user)
        - [Para Routine](#para-routine)
        - [Para Exercise](#para-exercise)
- [Frontend](#frontend) (Sin completar)
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

<div align="center">
  <img src="https://github.com/LaClCr/SweatLab/blob/main/DataBase/database.png" width=500 alt="E-R Diagram"/>
</div>

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

## Peticiones a la API
### Para User

- `GET /user`: Devuelve todos los usuarios.
- `GET /user/{id}`: Devuelve un usuario por su ID.
- `PUT /user/{id}`: Crea o actualiza un usuario.
  - Body:
    ```json
    {
      "name": "Nombre",
      "lastName": "Apellido",
      "email": "correo@example.com",
      "password": "contraseña",
      "dateOfBirth": "yyyy-MM-dd",
      "weight": 70.5,
      "height": 170.0
    }
    ```
- `DELETE /user/{id}`: Elimina un usuario por su ID.
- `POST /user/login`: Realiza el inicio de sesión de un usuario.

### Para Routine

- `GET /routine/{userId}`: Obtiene todas las rutinas de un usuario.
- `PUT /routine/{userId}`: Crea o actualiza una rutina para un usuario.
  - Body:
    ```json
    {
      "name": "Nombre de la rutina",
      "exercises": [
        {
          "name": "Nombre del ejercicio",
          "image": "URL de la imagen",
          "muscularGroup": "Grupo muscular",
          "weight": "Peso",
          "reps": "Repeticiones"
        }
      ]
    }
    ```
- `PUT /routine/{userId}/{routineId}`: Actualiza una rutina para un usuario.
  - Body:
    ```json
    {
      "name": "Nombre de la rutina",
      "exercises": [
        {
          "name": "Nombre del ejercicio",
          "image": "URL de la imagen",
          "muscularGroup": "Grupo muscular",
          "weight": "Peso",
          "reps": "Repeticiones"
        }
      ]
    }
    ```
- `DELETE /routine/{userId}/{routineId}`: Elimina una rutina de un usuario.
- `PUT /routine/exercise/{userId}/{routineId}`: Agrega un nuevo ejercicio a una rutina específica de un usuario.
  - Body:
    ```json
        {
          "name": "Nombre del ejercicio",
          "image": "URL de la imagen",
          "muscularGroup": "Grupo muscular",
          "weight": "Peso",
          "reps": "Repeticiones"
        }
    ```
- `PUT /routine/exercise/{userId}/{routineId}/{exerciseId}`: Actualiza un ejercicio existente en una rutina específica de un usuario.
- - Body:
    ```json
        {
          "name": "Nombre del ejercicio",
          "image": "URL de la imagen",
          "muscularGroup": "Grupo muscular",
          "weight": "Peso",
          "reps": "Repeticiones"
        }
    ```
- `DELETE /routine/exercise/{userId}/{routineId}/{exerciseId}`: Elimina un ejercicio de una rutina específica de un usuario.
- `GET /routine/exercise/{userId}/{routineId}`: Obtiene la lista de ejercicios de una rutina específica de un usuario.

### Para Exercise

- `GET /exercise`: Devuelve todos los ejercicios.
- `PUT /exercise/{id}`: Crea o actualiza un ejercicio.
  - Body:
    ```json
    {
      "name": "Nombre del ejercicio",
      "image": "URL de la imagen",
      "muscularGroup": "Grupo muscular",
      "weight": "Peso",
      "reps": "Repeticiones"
    }
    ```
- `DELETE /exercise/{id}`: Elimina un ejercicio.



# Frontend
(Sin completar)



