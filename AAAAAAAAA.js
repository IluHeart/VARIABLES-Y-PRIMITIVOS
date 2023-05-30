let peliculas = [
    {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      genre: "Action, Sci-Fi",
    },
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: "Drama",
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      genre: "Crime, Drama",
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: "Action, Crime, Drama",
    },
    {
      title: "Fight Club",
      director: "David Fincher",
      year: 1999,
      genre: "Drama",
    },
  ];
  
  function obtenerInformacionPeliculas(peliculas) {
    let resultado = {
      numPeliculas: peliculas.length,
      numYears: [],
      cuentaGeneros: {},
    };
  
    for (let i = 0; i < peliculas.length; i++) {
      const pelicula = peliculas[i];
  
      // Incrementa el contador de años únicos
      if (!resultado.numYears.includes(pelicula.year)) {
        resultado.numYears.push(pelicula.year);
      }
  
      // Incrementa el contador de géneros
      const generos = pelicula.genre.split(", ");
      for (let j = 0; j < generos.length; j++) {
        const genero = generos[j];
        if (resultado.cuentaGeneros[genero]) {
          resultado.cuentaGeneros[genero]++;
        } else {
          resultado.cuentaGeneros[genero] = 1;
        }
      }
    }
  
    console.log(resultado)
  }
  
  obtenerInformacionPeliculas(peliculas);

  
  
  /*Primero, definimos una función llamada obtenerInformacionPeliculas que toma un parámetro llamado peliculas.
  Esta función se encargará de calcular la información requerida sobre las películas.
  
  Luego, creamos un objeto llamado resultado que contendrá los resultados finales que queremos obtener.
  Inicialmente, establecemos las siguientes propiedades del objeto:
  
  numPeliculas: el número total de películas en el array peliculas, que se obtiene utilizando peliculas.length.
  numYears: un conjunto (Set) vacío donde almacenaremos los años únicos representados en las películas.
  cuentaGeneros: un objeto vacío donde almacenaremos el recuento de cuántas películas hay en cada género.
  A continuación, iniciamos un bucle for para iterar sobre cada película en el array peliculas.
  Usamos la variable i para llevar un seguimiento del índice actual en cada iteración.
  
  Dentro del bucle, obtenemos la película actual utilizando const pelicula = peliculas[i].
  Esto nos permite acceder a las propiedades específicas de cada película, como el título, el director, el año y el género.
  
  Incrementamos el contador de años únicos utilizando resultado.numYears.add(pelicula.year).
  El objeto Set garantiza que solo se agreguen años únicos al conjunto, evitando duplicados automáticamente.
  
  Luego, dividimos la cadena de géneros de la película en un array utilizando const generos = pelicula.genre.split(", ").
  Esto nos permite obtener cada género individualmente.
  
  Iniciamos otro bucle for para iterar sobre cada género en el array generos. Utilizamos la variable j para llevar un seguimiento del índice actual.
  
  Verificamos si el género actual ya ha sido contado en cuentaGeneros.
  Si existe como propiedad en resultado.cuentaGeneros, incrementamos el contador para ese género utilizando resultado.cuentaGeneros[genero]++.
  Si no existe, lo inicializamos en 1 utilizando resultado.cuentaGeneros[genero] = 1.
  
  Después de completar el bucle interno, volvemos al bucle principal y pasamos a la siguiente película hasta que hayamos recorrido todas.
  
  Una vez que hemos terminado de iterar sobre todas las películas, retornamos el objeto resultado, que contiene los resultados recopilados.
  
  Finalmente, fuera de la función, creamos un array peliculass que contiene los objetos de películas proporcionados en el ejercicio.
  Luego, llamamos a la función obtenerInformacionPeliculas pasando el array peliculas como argumento y almacenamos el resultado en la variable informacionPeliculas.
  
  Por último, mostramos el resultado en la consola utilizando console.log(informacionPeliculas).
  */