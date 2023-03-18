class Ejercicios{
    ejercicio_2(){
        let serieNumeros = document.getElementById("serien").value
        serieNumeros = serieNumeros.split(",").map(n => Number(n))
        function esPrimo(num) {
            if (num < 2) {
              return false;
            }
            for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) {
                return false;
              }
            }
            return true;
          }
          

        let numerosPrimos = serieNumeros.filter(n => esPrimo(n));
        let $res = document.getElementById("res")
        let resn = document.getElementById("resn")
        if (numerosPrimos.length > 0) {
            $res.textContent = ("Los numeros primos son: " + numerosPrimos.join(","))
        } else {
            resn.textContent = ("No hay numeros primos:")
        }
 
    
  
    }
    
    potencia(numero1, numero2) {
        let contador = 1
        let resultado = 1
        while (contador <= numero2) {
            resultado = resultado * numero1
            contador++
        }
        return resultado
        
    }
 
    ejercicio_3() {
        let n1 = 0
        let num1 = parseFloat(document.getElementById("base").value)
        let num2 = parseFloat(document.getElementById("xp").value)
        n1 = this.potencia(num1, num2)
        let res = document.getElementById("res")
        res.textContent = ("el resultado de la potencia es: " + n1)
    }
  
    ejercicio_4(){
        let serieNumeros = document.getElementById("serien").value
        let res = document.getElementById("res")
        serieNumeros = serieNumeros.split(",").map(n => Number(n))
        let arreglo=[]
        for(let i=0; i<serieNumeros.length; i++){
            let numero=serieNumeros[i]
            let exponente=this.potencia(numero,numero)
            arreglo.push(exponente)
            document.getElementById("res").textContent=arreglo
        }
    
    }

    ejercicio_5(){
        let numeroIngresado = parseFloat(document.getElementById("serien").value)

        let tabla = ""
        for (let i = 1; i <= 12; i++) {
            let producto = i * numeroIngresado
            tabla = tabla + numeroIngresado + " * " + i + " = " + producto + "\n"
        }
        let $res = document.getElementById("res")
        $res.textContent=tabla 
    
    }   
    Divisores(numero, valor) {
        let arregloNumeros = []
        
        for (let i = valor; i < numero; i++) {
            if (numero % i == 0) {
                arregloNumeros.push(i)
                
            }
        }
        return arregloNumeros
    }
    
    ejercicio_6() {
        let numero1 = parseFloat(document.getElementById("serien").value)
        let valorinicial = parseFloat(document.getElementById("valor").value)
        let numeros = this.Divisores(numero1, valorinicial)
        let $res= document.getElementById("res")
        $res.textContent = ("Los divisores: " + numeros.join(","))
    }
    
    retornarsuma(numero, valor) {
        let pnumero = parseFloat(document.getElementById("serien").value)
        let valorInicial = parseFloat(document.getElementById("valor").value)
        let numero1 = this.Divisores(pnumero, valorInicial)
        let acumulador = 0
        for (let i = 0; i < numero1.length; i++) {
            acumulador = acumulador + numero1[i]
        }
        return acumulador
    }
   
    ejercicio_7() {
        let numeroIngresado = parseFloat(document.getElementById("serien").value)
        let valorInicial = parseFloat(document.getElementById("valor").value)
        let numero = this.retornarsuma(numeroIngresado, valorInicial)
        let $res = document.getElementById("res")
        $res.textContent = ("la suma de los divisores es: " + numero)

    }

    ejercicio_8(){
        let numero=  parseInt(document.getElementById("serien").value);
        let $res=document.getElementById("res")
        const cadena= numero.toString();
        let pares=[]
        for(let pos=0;pos<cadena.length;pos++){
            if(cadena[pos]%10){
                pares.push(cadena[pos]);
            }
        }
        $res.textContent==(pares.reverse())
        console.log($res);
    
    }

    ejercicio_9(){
        let numero=  parseInt(document.getElementById("serien").value);
        let $res=document.getElementById("res")
        
        const cadena = numero.toString(); // Convertir número en cadena
        let suma = 0; // Variable para almacenar la suma de los dígitos

        // Recorrer cada carácter de la cadena y sumar su valor convertido a número
        for (let i = 0; i < cadena.length; i++) {
        suma += parseInt(cadena.charAt(i));
        }
        $res.textContent=suma
        console.log($res);
    
    
    }

    ejercicio_10(){
        let numero=  parseInt(document.getElementById("serien").value);
        let $res=document.getElementById("res")
        const cadena= numero.toString();
        let pares=[]
        for(let pos=0;pos<cadena.length;pos++){
            if(cadena[pos]%2==0){
                pares.push(cadena[pos]);
            }
        }
        $res.textContent=(pares.reverse())
        console.log($res);
    
    }

    ejercicio_11(){ 
        let num = parseInt(document.getElementById("serien").value);
        let $res= document.getElementById("res")
        let firstDigit = parseInt(num.toString()[0]);
        $res.textContent=firstDigit
        console.log($res); // imprime 1
    }

    ejercicio_12(){
        let num =  parseInt(document.getElementById("serien").value);
        let $res= document.getElementById("res")
                let lastDigit = num % 10;
                $res.textContent=lastDigit
        console.log($res); // imprime 5
    }

    retornarFactorial(num) {//Encontrar el factorial de un numero se uutiliza en el ejercico 13,14
        let producto = 1
        for (let i = num; i > 0; i--) {
            producto = producto * i
        }
        return producto
    }
   
    ejercicio_13() {
        let n1 = parseFloat(document.getElementById("serien").value)
        let si = this.retornarFactorial(n1)
        let $res = document.getElementById("res")
        $res.textContent = ("el factorial del numero ingresado es: " + si)
    }
    retornarFactorial(num) {
        let producto = 1
        for (let i = num; i > 0; i--) {
            producto = producto * i
        }
        return producto
    }
    ejercicio_14(){
        let n1 = document.getElementById("serien").value
        n1 = n1.split(",").map(n => Number(n))
        let arreglo = []
        for (let i = 0; i < n1.length; i++) {
            let numeros = n1[i]
            let si = this.retornarFactorial(numeros)
            arreglo.push(si)
            let $res = document.getElementById("res")
            $res.textContent = ("el factorial del numero ingresado es: " + arreglo)
        }

    }
    retornar(n1, n2) { 
        let arreglo = []
        for (let i = n1; i < n2; i++) {
            arreglo.push(i)
        }
        return arreglo
    }
   
    ejercicio_15() {
        let pr = parseFloat(document.getElementById("serien").value)
        let f = parseFloat(document.getElementById("f").value)
        let fl = this.retornar(pr, f)
        let $res = document.getElementById("res")
        $res.textContent = ("El inicio y el fin del arreglo es: " + fl)

    }
}

let Ej= new Ejercicios


Ej.ejercicio_1();

Ej.ejercicio_2();

Ej.potencia();

Ej.ejercicio_3();

Ej.ejercicio_4();

Ej.ejercicio_5();

Ej.Divisores();

Ej.ejercicio_6();

Ej.retornarsuma();

Ej.ejercicio_7();

Ej.ejercicio_8();

Ej.ejercicio_9();

Ej.ejercicio_10();

Ej.ejercicio_11();

Ej.ejercicio_12();

Ej.ejercicio_13();

Ej.ejercicio_14();

Ej.retornar();

Ej.ejercicio_15();