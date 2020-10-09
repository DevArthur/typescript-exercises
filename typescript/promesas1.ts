(() => {

    console.log('inicio');

    const promesa1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Se termino el timeout');
        }, 3000);
    });

    promesa1
        .then(mensaje => console.log(mensaje))
        .catch(error => console.warn(error));

    console.log('fin');    
})();