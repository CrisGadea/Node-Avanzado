import colors from 'colors';

export const mostrarMenu = () => {
    console.log(
`${colors.green("==========================")}
    Seleccione una opción
${colors.green("==========================")}

${colors.green("?")}  ¿Qué desea hacer? (Use arrow keys)
    ${colors.green("1.")} Crear tarea
    ${colors.green("2.")} Listar tareas
    ${colors.green("3.")} Listar tareas completadas
    ${colors.green("4.")} Listar tareas pendientes
    ${colors.green("5.")} Completar tarea(s)
    ${colors.green("6.")} Borrar tarea
    ${colors.green("0.")} Salir`);
};