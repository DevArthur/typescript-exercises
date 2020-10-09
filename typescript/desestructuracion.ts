(() => {

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder : 'fuerza'
    }
    const extraer = ({clave, nombre}: any ) =>{
        //const {clave, nombre} = avenger;
        console.log(nombre);
        console.log(clave);
    }
    extraer(avenger);

    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman']
    const [, , nino] = avengers;
    console.log(nino);

    const avengersArr = ([thor, ironman, spiderman]: string[]) => {
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    }
    avengersArr(avengers);
    
})();