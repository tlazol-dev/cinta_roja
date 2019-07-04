// escribe una funcion que muestre la tabala de multiplicar de un numero

// var num= 5;

// function multiplicar(num){
//  for(var i = 0; i <= 10; i++){
//    // console.log(i * num)
//     //console.log(i + "x" + num + "=" + i * num)
//     console.log( `${num} X ${i} = ${num * i}`)
//     //  var res = i * num;
//     //  console.log(res);
//     //return res;
//     } 
    
    
// }

// multiplicar(num);
// //console.log(resultado);


// escribe una funcion que imprima los numeros pares de 1 a 100

// const pares = () => {
// for(var j = 0; j <= 50; j++){
//    if( j % 2 === 0){
//     console.log(`${j} Es par`);
//    }
//  }
// }

// pares();


// escribir una funcion que tome una palabra como parametro y retorne true si es palindromo y false si no lo es


var enunciado = "ana";


function esPalindromo(enunciado){
    var reverse_string ="";
    
    var clean_string = enunciado.replace(/ /g,"");
    console.log(clean_string);
     for (var i = clean_string.length -1; i >= 0;  i--){
        var el = clean_string[i];
        reverse_string += el;
     }
    
     if(clean_string === reverse_string){
        console.log("es palindromo");
     } else {
        console.log("no es palindromo");
     }    
}

esPalindromo(enunciado);





