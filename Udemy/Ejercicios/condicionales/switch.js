var menu = 1;
var tipoMenu;
(function (tipoMenu) {
    tipoMenu[tipoMenu["canciones"] = 1] = "canciones";
    tipoMenu[tipoMenu["albums"] = 2] = "albums";
    tipoMenu[tipoMenu["perfil"] = 3] = "perfil";
})(tipoMenu || (tipoMenu = {}));
switch (menu) {
    case tipoMenu.canciones:
        console.log('accede a canciones');
        break;
    case tipoMenu.albums:
        console.log('accede a albums');
        break;
    case tipoMenu.perfil:
        console.log('accede a perfil');
        break;
    default:
        console.log('el menu no existe');
        break;
}
