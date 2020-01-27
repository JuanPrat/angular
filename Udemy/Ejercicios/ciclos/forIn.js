var listadoDeUsuarios = [
    {
        nombre: 'ana',
        apellido: 'garces'
    },
    {
        nombre: 'juan',
        apellido: 'gonzales'
    }
];
for (var usuario in listadoDeUsuarios) {
    console.log(listadoDeUsuarios[usuario].nombre, listadoDeUsuarios[usuario].apellido);
}
