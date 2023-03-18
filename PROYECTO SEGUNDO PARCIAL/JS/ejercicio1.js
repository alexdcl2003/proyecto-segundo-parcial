class Ejercicios{
    //ejercio1 se lo paso a un archivo difente por emootivo de que el mensaje 
    //"la suma de los numros perfectos es:" aparecia en todos los otros ejercicios 
    //no afectaba en nada a la resolucion de cafda uno de ellos pero no se veai bien
    // que estuviera por eso lo pasamos aqui 
    si(serieNumeros){
        let sumarPerfectos = 0
        for (let i = 0; i < serieNumeros.length; i++) {
            let contador = 0, acumulador = 0
            let numero = serieNumeros[i]
            while (contador < numero) {
                if (numero % contador == 0) {
                    acumulador += contador
                }
                contador++
            }
            if (acumulador == numero) {
                sumarPerfectos = sumarPerfectos + numero
            }
        }
        return sumarPerfectos
      }
      
      ejercicio_1(){
        let sn = document.getElementById("serien").value
        sn = sn.split(",").map(n => Number(n))
        let sumarPerfectos = this.si(sn)
        let $res = document.getElementById("res")
        $res.textContent = "La suma de números perfectos es: " + sumarPerfectos
      }
}
let Ej= new Ejercicios
Ej.ejercicio_1();
Ej.si();