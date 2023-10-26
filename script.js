	 var valor1;
	 var i = 0;
	 valor1 = prompt('Ingrese primer valor: ');
	 var vector = new Array(valor1);
	 var vector2 = new Array(valor1);
	  function calcular(){

	 s = parseFloat(document.getElementById("s").value);
	 b = parseFloat(document.getElementById("b").value);
	 h = parseInt(document.getElementById("h").value);
	 m = document.getElementById("m").value;
	 n = document.getElementById("a").value;
	 dpi = document.getElementById("dpi").value;
	 let iggs = 0.0483;
	 let sueldoT = s * (1-parseFloat(iggs))+b;
	 let Bo = 0;
	 let mu = 0
	 if(s != 0){
		if(parseFloat(sueldoT)<500){
			Bo = 10;
		}else{
	     
	     if(500 <parseFloat(sueldoT) && parseFloat(sueldoT) <=1000 ){
	         Bo = 10;
	 
	     }else{
	        
	         if(1000 <parseFloat(sueldoT) && parseFloat(sueldoT) <=3000 ){
	             Bo = 15;
	         }else{	       	   
	             if(3000 <parseFloat(sueldoT) && parseFloat(sueldoT) <=6000 ){
	                 Bo = 50;
	                 
	             }else{
	                 if(6000 <parseFloat(sueldoT) && parseFloat(sueldoT) <=9000 ){
	                     Bo = 75;
	                     
	                 }else{
	                     if(9000 <parseFloat(sueldoT) && parseFloat(sueldoT) <=12000 ){
	                         Bo = 100;
	                         
	                     }else{
	                         Bo = 150;
	                             
	                         
	                    }                          
	                }
	            }
	         }
	     }
	  }

	     mu = 2*Bo;
if(i < valor1){
	    vector[i] = sueldoT;
	    vector2[i] = h;
           i = i+1;
}

	     alert("El sueldo para "+m+"  "+n+" con el No. De DPI "+dpi+" es "+vector[i-1]);
	     alert("El precio del bolato de ornato es de "+Bo);
	     alert("El precio de la multa del bolato de ornato es de "+mu);
            if(i == valor1){
	     var sumS = 0;
	     var sumH = 0;
	     var prom = 0;
	     for(var x = 0; x<valor1; x++){
	     sumS=  sumS+vector[x];
	     if(h>0){
	     sumH=  sumH+vector2[x];
	     }
	     }
	     prom = sumS/valor1; 
	     alert("La suma de todos los sueldos es de "+sumS);
	     alert("El promedio de todos los sueldos es de "+prom);
	     alert("La suma de todas las horas extras es es de "+sumH);
	     }
	  
	   }
     }