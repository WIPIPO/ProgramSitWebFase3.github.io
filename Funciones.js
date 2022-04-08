var botonC = document.getElementById("convertir");
var borrarDa= document.getElementById("BorrarD");


var boton = document.getElementById("Calcular");
var borrarB= document.getElementById("Borrar");

if(boton= document.getElementById("Calcular")){
    
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

    }else if ( botonC = document.getElementById("convertir")){
        botonC.addEventListener("click", ConvertirDatos);
        borrarDa.addEventListener("click",BorrarConvercion);

        function ConvertirDatos (){
            var DatoE = parseFloat(document.getElementById("DatoE").value)
            var TipoDe = document.getElementById("UdatosE").value;
            var TipoDs = document.getElementById("UdatosS").value;
            var r ;

            r = parseFloat((DatoE*TipoDs)/TipoDe);
            document.getElementById("DatosS").value = r;
            
            
            
        }
        function BorrarConvercion (){

            document.getElementById("DatoE").value = "";
            document.getElementById("DatosS").value ="";
            document.getElementById("UdatosE").selectedIndex=0;
            document.getElementById("UdatosS").selectedIndex=0;


        }

}




