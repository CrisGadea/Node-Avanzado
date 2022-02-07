import { mostrarMenu, pausa } from './helpers/mensajes.js';

console.clear();

const main = async () => {
    await mostrarMenu()
    .then(result => {
        console.log(`{opt: \'${result}\'}`);  
    })
    .catch(err => {console.log(err)})

    await pausa()
    .then(res => {
        console.log(`result: ${res}`)
    })
    .catch(err => {console.log(err)}) 
}

main();