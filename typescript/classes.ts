(() => {


    class Avenger {

        constructor(public nombre: string, public equipo : string, public nombreReal? : string, 
            public puedePelear : boolean = true,
            public peleasGanadas : number = 0){
        }
    }

    const antman = new Avenger('Antman', 'Cap');
    console.log(antman);

    // class Avenger {
        
    //     nomber: string;
    //     equipo : string;
    //     nombreReal: string;
    //     puedePelear: boolean;
    //     peleasGanadas: number;

    //     constructor(nombre: string, equipo: string, nombreReal: string, puedePelear: boolean, peleasGanadas: number){
    //         this.nomber = nombre;
    //         this.equipo = equipo;
    //         this.nombreReal = nombreReal;
    //         this.puedePelear = puedePelear;
    //         this.peleasGanadas = peleasGanadas;
    //     }
    // }

    // const antman = new Avenger('Antman', 'Capi', 'Steve', true, 5);
    // console.log(antman);

})();

