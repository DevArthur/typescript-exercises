(function(){

    let miFuncion = function(a: string){
        return a.toUpperCase();
    }
    let miFuncionFlecha = (a:string) => a.toUpperCase();
    console.log(miFuncion('Funcion normal'));
    console.log(miFuncionFlecha('Funcion de flecha'));
    
    let sumatoria = function(a: number, b: number){
        return a + b;
    }
    let sumatoriaFlecha = (a: number, b:number) => a + b;
    console.log(sumatoria(5, 7));
    console.log(sumatoriaFlecha(6, 8));

    let hulk = {
        nombre: 'Hulk',
        smash() {

            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`)
            }, 1000);
        }
    }
    hulk.smash();
})();