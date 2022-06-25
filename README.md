# ENGENIUM
Proyecto Final del curso de React de Coderhouse,
Comisión 31180
El proyecto consiste en un e-commerce de equipamiento electronico industrial. En el mismo se listan una serie de productos y se definen sus caracteristicas.

## Alumno
Carlos Mariano Belmonte - carlos.m.belmonte@gmail.com

## Available Scripts
Para iniciar la aplicación, ejecutar:
```bash
npm start
```
URL: [http://localhost:3000](http://localhost:3000)

## Navegacion por la pagina
El proyecto cuenta con un NavBar para las diferentes secciones, las cuales contienen diferente informacion.
Tambien cuenta con un footer, que tiene iconos clickeables que direccionan a enlaces externos.

En la seccion home/products de la pagina siempre muestra TODOS los productos disponibles. Luego en la seccion de Productos, se los puede filtrar por categorias.
Cada producto tiene un Detalle y ID propio (tambien cuentan con stock), a los mismos se los puede agregar/eliminar del carrito.
En el carrito se listan todos los productos seleccionados, permitiendo la opcion de eliminarlos individualmente o a TODOS los listados.
Estos productos listados, son almacenados en el localstorage para que esten disponibles siempre, pero cuando el usuario confirma la compra, se borran del localstorage.
Una vez confirmada la compra, se almacena esta ORDEN en Firebase.

Tambien la pagina cuenta con otras secciones de navegabilidad. La seccion de Contacto, almacena cada mensaje realizado por el usuario en Firebase. 
![image](https://github.com/carlosmbelmonte/repoReact/blob/main/public/navegabilidad.gif)

```bash
    Demostracion del funcionamiento del localstorage
```
![image](https://github.com/carlosmbelmonte/repoReact/blob/main/public/localstorage.gif)
