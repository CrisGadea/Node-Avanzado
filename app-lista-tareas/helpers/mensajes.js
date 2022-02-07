import colors from 'colors';
import * as readline from 'readline';
//import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

const mostrarMenu = () => {
    return new Promise((resolve, reject) => {
        let question = `
${colors.green("==========================")}
    Seleccione una opción
${colors.green("==========================")}

${colors.green("?")}  ¿Qué desea hacer? (Use arrow keys)
    ${colors.green("1.")} Crear tarea
    ${colors.green("2.")} Listar tareas
    ${colors.green("3.")} Listar tareas completadas
    ${colors.green("4.")} Listar tareas pendientes
    ${colors.green("5.")} Completar tarea(s)
    ${colors.green("6.")} Borrar tarea
    ${colors.green("0.")} Salir

Seleccione una opción: `;

        rl.question(question,(input) => {
            resolve(input)
            rl.close()
        })
    })
};

const pausa = () => {
    return new Promise( (resolve, reject) =>{
        let aviso = `Presiona ${colors.green('ENTER')} para continuar`
        rl.question(aviso, (answer) => {
            resolve(answer)
        });
        resolve()
    }) 
}

export {pausa, mostrarMenu}


