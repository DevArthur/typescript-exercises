(() => {

      const retirarDinero = (monto: number): Promise<number> => {

        let dineroActual = 1000;
        return new Promise((resolve, reject) => {

            if (monto > dineroActual) {
                reject('No hya suficiente dinero');
            }
            else{
                dineroActual -= monto;
                resolve(dineroActual);
            }
        });
      }

      retirarDinero(1500)
          .then(montoActual => console.log(`Me queda: $${montoActual}`))
          .catch(error => console.warn(error));
})();