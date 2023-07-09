/* Establezca el ancho de la navegación lateral en 250px y el margen izquierdo del 
contenido de la página en 250px y agregue un color de fondo negro al cuerpo */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Establezca el ancho del panel de navegación lateral en 0 y el margen izquierdo 
del contenido de la página en 0, y el color de fondo del cuerpo en blanco */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}