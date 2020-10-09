const edad = 30;
function getEdad(){
    return edad + 10;
}

(function(){    
    const nombre  = 'Arturo';
    const apellido = 'Lopez';    
    const salida = `${nombre} ${apellido}. Edad:(${getEdad()})`;
    console.log(salida);
})();