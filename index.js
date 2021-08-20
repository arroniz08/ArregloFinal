function fnEjecuta(){
    var numero = document.getElementById('txtnumero').value;
    var arreglo = [
        ['.','.','.'],
        ['#','#','.'],
        ['#','.','#']
    ];

    var resultado = 'NO';
    var valor;
    var cont = 0;


    
    if(numero == '') {
        alert('Favor de escribir un numero');
    } else {
       
        for (x=0; x<arreglo.length; x++){
  
            for(y=0; y<arreglo[x].length; y++){
                cont++;
                valor = arreglo[x][y];
            }

            if(valor == '#'){
                break;
            }
            
        }

        if(cont == numero && valor == '.'){
            resultado = 'YES';
        } 

        alert(resultado);
        console.log(resultado);
        console.log(valor);
        console.log(cont);




    }
}