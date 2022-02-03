const contratarJugador = new Promise( (resolve, reject) => {
    const contratado = true;
// Tarea promises .catch (Descomentar línea 4 y comentar línea 2 para ejecutar)
    //const contratado = false;

    //generarMensaje(contratado);

    if(contratado) {
        resolve('El jugador se incorpora al equipo')
    } else {
        reject('El jugador y el equipo no llegaron a un acuerdo')
    }
})

const generarMensaje = contratado => {
    if (contratado) {
        return "El jugador se incorpora al equipo";
    }
    return "El jugador y el equipo no llegaron a un acuerdo";
}




contratarJugador
    .then( generarMensaje(this.contratado))
    .catch( error => console.log(error));


    console.log(contratarJugador)
