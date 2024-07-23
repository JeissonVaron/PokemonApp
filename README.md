# PokemonApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Iniciar el proyecto

    1. Se deben instalar las dependencias con `npm install`
    
    2. Para ejecutar el proyecto hay que ejecutar `ng serve -o` esto abrira el proyecto local en el navegador

## Explicacion del proyecto

    1. Se creó una carpeta llamada "services" donde se encuentra el servicio encargado de consultar los Pokémon.

    2. Se agregó HttpClientModule en imports del archivo app.module.ts.

    3. Se creó una interfaz (IPokemons) para la respuesta del servicio.

    4. Se instaló Bootstrap para visualizar de forma más rápida y fácil los Pokémon.

    5. Para visualizar los Pokémon, se hardcodeó una variable en app.component.ts llamada baseImg: string. Luego, se creó una función que devuelve un string. Esta función recibe un Pokémon y, internamente, devuelve la URL base de la imagen + el nombre del Pokémon en minúsculas + la terminación 'jpg'. Todo esto para que en el app.component.html se implemente la función de esta manera: [src]="obtenerSrcImagen(pokemon)".