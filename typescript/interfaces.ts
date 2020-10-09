(() => {

    interface Xmen {
        nombre: string;
        edad: number;
    }
    const wolverin: Xmen = {
        nombre : 'Logan',
        edad : 60
    }

    const enviarMision = (xmen:Xmen) =>{
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    }
    const regresaCuartel = (xmen : Xmen) => {
        console.log(`Regresando a ${xmen.nombre} al cuartel porque ya está viejito, ya tiene ${xmen.edad} años`);
    }

    enviarMision(wolverin);
    regresaCuartel(wolverin);

})();