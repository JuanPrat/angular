var menu:number = 1;

enum tipoMenu{
    canciones = 1,
    albums = 2,
    perfil = 3
}

switch(menu){
    case tipoMenu.canciones:
        console.log('accede a canciones')
        break;
    case tipoMenu.albums:
        console.log('accede a albums')
        break;
    case tipoMenu.perfil:
        console.log('accede a perfil')
        break;
    default:
        console.log('el menu no existe')
        break;
}

