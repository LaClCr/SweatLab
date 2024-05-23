<div align="center">
  <img src="https://github.com/Florida2DAM/pfc-23-24-LaClCr/blob/main/Branding/banner.png"/>
  <br>
</div>


# Índice

- [Realizado por](#realizado-por)
- [Sobre este Proyecto](#sobre-este-proyecto)
- [Memoria](#memoria)
- [Backend](#backend)
    - [Base de Datos](#base-de-datos)
    - [Estructura del Proyecto](#estructura-del-proyecto)
    - [Configuración](#configuración)
        - [Archivos de Configuración](#archivos-de-configuración)
        - [Clases de Configuración](#clases-de-configuración)
- [Frontend](#frontend)
    - [Tecnologías Utilizadas](#tecnologías-utilizadas)
    - [Estructura del Proyecto (Frontend)](#estructura-del-proyecto-frontend)
    - [Vídeo demo](#vídeo-demo)
- [Instalación local](#instalación-local)
- [QR de descarga](#qr-de-descarga)
<br><br>
# Realizado por:

| [<img src="https://github.com/LaClCr/Portafolio/blob/main/image3.jpeg" width=115><br><sub>Laia Clemente Crespo</sub>](https://github.com/LaClCr) |
| :---: |

# Sobre este Proyecto:
<br>
Presentada como mi trabajo de final de ciclo (TFC), SweatLab es una aplicación móvil diseñada para ayudarte a planificar, registrar y seguir tus rutinas de entrenamiento personalizadas. Con una interfaz intuitiva y características innovadoras, SweatLab te permite crear y gestionar tus rutinas de entrenamiento, registrar tu progreso y mantener un seguimiento de tus logros fitness.

# Memoria 

Puedes encontrar el informe/memoria de este proyecto [aquí](https://github.com/Florida2DAM/pfc-23-24-LaClCr/blob/main/ProjectReport_(Memoria)/SweatLab_Memoria_ENTREGA.pdf).

# Backend
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.2.4-green.svg)](https://spring.io/projects/spring-boot)
[![JDK](https://img.shields.io/badge/JDK-21-orange.svg)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
<br><br>
Este proyecto de backend se basa en Spring Boot 3.2.4, un marco de trabajo de desarrollo de aplicaciones Java que facilita la creación de aplicaciones Spring con una configuración mínima. Utiliza Maven como sistema de gestión de proyectos y JDK 21 como versión del lenguaje Java.<br><br>

## Base de Datos
[![H2 Database](https://img.shields.io/badge/H2_Database-Latest-blue.svg)](https://www.h2database.com/html/main.html)

Se utiliza una base de datos H2 embebida en el servidor. Las tablas de la base de datos se generan a partir de los modelos de entidad (Entity) definidos en el proyecto.<br><br>

<div align="center">
  <img src="https://github.com/Florida2DAM/pfc-23-24-LaClCr/blob/main/Media/ScreenShots/diagram.png" width=500 alt="E-R Diagram"/>
  <br><br>
</div>

## Estructura del Proyecto

<br>La estructura del proyecto se organiza siguiendo las convenciones de un proyecto Spring Boot estándar. Incluye los siguientes paquetes principales:

* `com.pfc.sweatlab` -> Raíz del paquete que contiene toda la lógica del proyecto.
* `com.pfc.sweatlab.routine` y `com.pfc.sweatlab.routine.model` -> Contienen las clases relacionadas con las rutinas de entrenamiento.
* `com.pfc.sweatlab.exercise` y `com.pfc.sweatlab.exercise.model` -> Contienen las clases relacionadas con los ejercicios.
* `com.pfc.sweatlab.user` y `com.pfc.sweatlab.user.model`-> Contienen las clases relacionadas con los usuarios.

<br>

## Configuración

La configuración del proyecto se realiza principalmente a través de anotaciones y archivos de configuración en el paquete raíz.

### Archivos de Configuración

* `data.sql`Este archivo se utiliza para inicializar la base de datos con datos predefinidos. Puedes encontrar el código [aquí](https://github.com/Florida2DAM/pfc-23-24-LaClCr/blob/BackEnd/BackEnd/sweatlab/src/main/resources/data.sql).

* `application.properties` Este archivo de propiedades permite configurar diversos aspectos de la aplicación, como la configuración de la base de datos, las propiedades de seguridad y más. Puedes encontrar el código [aquí](https://github.com/Florida2DAM/pfc-23-24-LaClCr/blob/BackEnd/BackEnd/sweatlab/src/main/resources/application.properties).

### Clases de Configuración

* `ModelMapperConfig` Esta clase de configuración proporciona un bean para la instancia de ModelMapper. ModelMapper es una biblioteca de mapeo de objetos Java que realiza la asignación entre objetos de manera automática, basándose en convenciones y reglas configurables. Simplifica el proceso de mapeo entre objetos DTO (Data Transfer Object) y entidades de dominio. Puedes encontrar el código [aquí](https://github.com/Florida2DAM/pfc-23-24-LaClCr/blob/BackEnd/BackEnd/sweatlab/src/main/java/com/pfc/sweatlab/config/ModelMapperConfig.java).
<br><br>

# Frontend

El frontend de SweatLab está desarrollado utilizando React Native, una biblioteca popular para construir aplicaciones móviles multiplataforma con JavaScript y React. La aplicación está diseñada para ser intuitiva y fácil de usar, proporcionando una experiencia de usuario fluida.

## Tecnologías Utilizadas

[![React Native](https://img.shields.io/badge/React_Native-0.70-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-48.0.8-lightgrey.svg)](https://expo.dev/)

## Estructura del Proyecto (Frontend)

La estructura del proyecto frontend está organizada de la siguiente manera:

* `components/` -> Contiene los componentes reutilizables de la UI.
* `screens/` -> Contiene las pantallas principales de la aplicación.
* `functions/` -> Funciones que comunican con la API del BackEnd.
* `assets/` -> Recursos estáticos como imágenes y fuentes.
* `App.js` -> Punto de entrada principal de la aplicación.

## Vídeo demo

<br>

[![Ver el vídeo](https://img.youtube.com/vi/kBUB9652pCc/maxresdefault.jpg)](https://youtu.be/kBUB9652pCc)

<br>

# Instalación local

Para instalar y ejecutar el proyecto localmente, sigue los siguientes pasos:

1. **Clonar el repositorio:**
    ```sh
    git clone https://github.com/LaClCr/SweatLab.git
    cd SweatLab
    ```

2. **Backend:**
    - **Instalar las dependencias de Maven:**
        ```sh
        ./mvnw clean install
        ```
    - **Ejecutar la aplicación:**
        ```sh
        ./mvnw spring-boot:run
        ```

3. **Frontend:**
    - **Instalar las dependencias de npm:**
        ```sh
        npm install
        ```
    - **Iniciar la aplicación:**
        ```sh
        npm start
        ```
# QR de descarga

<div align="center">
  <img src="https://github.com/Florida2DAM/pfc-23-24-LaClCr/blob/main/APK/QR_Descarga.png" width=300/>
</div>
