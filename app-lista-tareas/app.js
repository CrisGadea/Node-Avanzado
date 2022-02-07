import { mostrarMenu, pausa } from './helpers/mensajes.js';

console.clear();

const main = async () => {
    let opc;

    do {
        opc = await mostrarMenu();
        console.log({opc});
        //await pausa();
    } while (opc !== '0');

}

main();