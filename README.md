# Spotify

La intencion de este proyecto es replicar Spotify con la máxima precision posible.

<h1> Funcionalidades </h1>

En el proyecto, podemos ver como se emula la interfaz de uso de Spotify. Se ha intentado acercarse al máximo a los estilos de la web original, en la medida en que hemos aprendido hasta el momento y con la actual experiencia. En cuanto a funcionalidad, contiene algunas de las principales funciones de Spotify. Algunas de ellas son:
    1. Posibilidad de acceder a cada uno de los albumes que se muestran en Home y cambiar de vista a una en la que se muestra el album concreto con toda su tracklist.
    2. Reproductor de audio, enlazado con cada una de las caciones. Reproduce al click sobre una de ellas.
    3. Posibilidad de añadir un album al apartado de Listas de Reproduccion y de eliminarlo si se desea.

<h1> Algortimo </h1>
En cuanto a su algoritmo, se basa en la busqueda del dato demandado a traves de un evento, para posteriormente utilizarlo en la funcion requerida.
El Stack con el que se ha llevado a cabo es:
    - HTML5
    - Bootstrap 4
    - CSS3
    - JavaScript (ES6)
    - TypeScript 3
    - Angular 8

<h1> Funcionamiento </h1>

 El funcionamiento es sencillo, al entrar en la home podemos ver un listado de albumes a los que podemos acceder mediante un click. Al hacerlo, se nos mstrara una vista con toda la informacion relativa a este y podremos escoger la canción que deseamos escuchar (tambien mediante click). Al hacerlo, empezara la reproduccion en la barra inferior que ocntiene el reproductor. A la izquierda de este, se nos mostrará una pequeña imagen con la portada del album, el título de la canción que esta en reproducción y su artista.
 Por otro lado, en la vista de un album concreto, en la parte izquierda, donde está la información genérica del este, podemos ver un icono de "más información" al hacer click sobre este, automaticamente se nos añadirá este album a nuestra lista de reproduccion. Podemos eliminarla haciendo click derecho sobre ella y escogiendo eliminar en el dropdown que se abrirá. El menu de navegacion, así como el listado de playlist se encuentra fijado en la parte izquierda de nuestra pantalla.

 <h1> Mejoras </h1>

 La posibilada de implementar funcionalidades es grande, así como la de mejorar partes concretas del algoritmo. Algunas de las próximas implementaciones son las siguientes:
    1. Mejorar eficiencia del algortimo: que se guarde en caché el ultimo album escogido par apoder trabajar con él sin tener que volver a realizar la peticion.
    2. Posibilidad de añadir playlist personalizadas, incluyendo canciones sueltas en listas de reproducción creadas como vacías.
    3. Posibilidad de añadir una canción específica a nuestra biblioteca, fuera de las listas de reproducción.
    4. Funciones para reproduccion continuada, que en cuanto acabe una cancion empiece la siguiente, siempre estando o dentro de un album o de una playlist.
    5. Reproducción en bucle.
    6. Reproducción aleatoria.



