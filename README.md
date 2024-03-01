# Proyecto "Cursos de Fotografía" con Bootstrap
## Curso de Confección y Publicación de Páginas Web
### CIFO Barcelona La Violeta, 2024
![image](https://github.com/manusalasprofesor/curso-fotografia-bootstrap/assets/125913240/71d1fa8c-b980-4740-940b-ca1e72f8f1b7)


## Limpieza de CSS Bootstrap con Node.js

1.- Primero instalar Node.JS en el equipo, instalación convencional
![image](https://github.com/manusalasprofesor/curso-fotografia-bootstrap/assets/125913240/254349d6-610e-4909-b4b3-b85ddddd5aa0)

2.- Abrir la terminal de Visual Studio Code y localizar la carpeta donde se encuentra el proyecto de Bootstrap

![image](https://github.com/manusalasprofesor/curso-fotografia-bootstrap/assets/125913240/fa9e6fb7-4030-463a-be8c-b8ce52341181)

3.- En el terminal escribir: **npm init -y**

4.- En el archivo creado package.json anadir el siguiente script: "limpiacss": "purgecss --css ./css/bootstrap.css --content ./index.html --output ./css/optimizado.css"

![image](https://github.com/manusalasprofesor/curso-fotografia-bootstrap/assets/125913240/46bce26d-9cd0-4f34-9f6c-9f30abba4c6c)

4.- Ejecutar en la terminal el siguiente comando: **npm i -D purgecss** para instalar las dependencias que necesitamos

5.- Y ejecutar el script escribiendo el siguiente comando en la terminal: **npm run limpiacss**


