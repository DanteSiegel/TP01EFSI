const notaMatematica = document.getElementById("notaMat");

const notaLengua = document.getElementById("notaLen");

const notaEfsi = document.getElementById("notaEf");

const promedio = document.getElementById("botonProm");

const mayor = document.getElementById("botonMostrarMayor");

const botonIngresar = document.getElementById("botonIngresar");

const valoresIngresadosDiv = document.getElementById("valoresIngresadosDiv");


let numMax;

botonIngresar.addEventListener("click", function() {
    const valorMatematica = parseInt(notaMatematica.value);

    const valorLengua = parseInt(notaLengua.value);

    const valorEfsi = parseInt(notaEfsi.value);

    

    valoresIngresadosDiv.innerHTML = `Nota Matemática: ${valorMatematica}, Nota Lengua: ${valorLengua}, Nota EFSI: ${valorEfsi}`;
});

promedio.addEventListener("click", function() {
    const valorMatematica = parseInt(notaMatematica.value);

    const valorLengua = parseInt(notaLengua.value);

    const valorEfsi = parseInt(notaEfsi.value);

    const prom = (valorMatematica + valorLengua + valorEfsi) / 3
    promedio.innerHTML = `Tu promedio es: ${prom}`;
});


mayor.addEventListener("click", function() {
    
    const valorMatematica = parseInt(notaMatematica.value);

    const valorLengua = parseInt(notaLengua.value);

    const valorEfsi = parseInt(notaEfsi.value);

    if (valorMatematica > valorLengua &&  valorEfsi) {
        numMax = valorLengua;
    }
    else if(valorLengua > valorEfsi && valorMatematica){
        numMax=valorLengua;
    }else if (valorEfsi > valorLengua && valorMatematica) 
    {
        numMax = valorEfsi;
    }
mayor.innerHTML =  `El mayor es: ${numMax}`;

});
