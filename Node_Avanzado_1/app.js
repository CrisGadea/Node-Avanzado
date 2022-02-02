// Ejemplo sin Callback

const lenguajes = ['Node', 'React', 'Java', 'Python', 'Ruby on Rails'];

function mostrarLenguajes() {

    setTimeout(() => {

        lenguajes.forEach(lenguaje => console.log(lenguaje))

    }, 1000);

}

mostrarLenguajes();

// Ejemplo con Callback

function nuevoLenguaje(lenguaje, callback) {

    setTimeout(() => {

        lenguajes.push(lenguaje);

        callback();

    }, 2000);

} 

nuevoLenguaje('Angular', mostrarLenguajes);


// Callback Hell

const lenguajesAprendidos = [];

function agregarLenguajeAprendido(lenguaje, callback) {

    lenguajesAprendidos.push(lenguaje);

    console.log(`Agregado: ${lenguaje}`);

    callback();

}

function mostrarLenguajesAprendidos() {

    console.log(lenguajesAprendidos)

}

function iniciarCallbackHell() {

    setTimeout(() => {

        agregarLenguajeAprendido('Java', mostrarLenguajesAprendidos)

        setTimeout(() => {

        agregarLenguajeAprendido('Node', mostrarLenguajesAprendidos)

        setTimeout(() => {

            agregarLenguajeAprendido('Python', mostrarLenguajesAprendidos)

        }, 3000);

        }, 3000);

    }, 3000);

}

iniciarCallbackHell();