

var boton = document.getElementById("Calcular");
var borrarB= document.getElementById("Borrar");
boton.addEventListener("click", calculPro);
borrarB.addEventListener("click",borrar);


function calculPro (){
    
    var valorcomp = parseFloat( document.getElementById("ValorCompra").value);
    var utilidad = parseFloat(document.getElementById("Utilidad").value);
    var impuesto = parseFloat(document.getElementById("Impuesto").value);
    var venta 
    var ganancia 

    
    venta = valorcomp+(valorcomp*(utilidad/100))+(valorcomp*(impuesto/100));//con esto para calcular
    document.getElementById("ValorVenta").value= venta;// y estopara mandar el dato al imput ventas


    ganancia=(valorcomp*(utilidad/100));
    
    document.getElementById("Ganancia").value = ganancia; //mandar datos al imput ganancias

}
function borrar (){
    document.getElementById("ValorCompra").value = "";
    document.getElementById("Utilidad").value = "";
    document.getElementById("Impuesto").value = "";
    document.getElementById("ValorVenta").value = "";
    document.getElementById("Ganancia").value = "";

}
