interface usuario{
    nombre:string,
    apellido:string
}

var listadoDeUsuarios: Array<usuario> = [
    {
        nombre: 'ana',
        apellido: 'garces'
    },
    {
        nombre : 'juan',
        apellido: 'gonzales'
    }
]


for(let usuario in listadoDeUsuarios){
    console.log(listadoDeUsuarios[usuario].nombre, listadoDeUsuarios[usuario].apellido)
}