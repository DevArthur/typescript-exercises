(function(){
    function activar(persona: string, momento?: string, objecto: string = 'batiseñal'){       
        if (momento) {
            console.log(`Hola, ${persona} activo la ${objecto} ${momento}`);
        }
        else{
            console.log(`Hola, ${persona} activo la ${objecto}`);
        }
    }
    activar('Gordon', 'en la noche');    
    activar('Gordon');    
})();