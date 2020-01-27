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


for(let usuario of listadoDeUsuarios){
    console.log(usuario.nombre, usuario.apellido)
}