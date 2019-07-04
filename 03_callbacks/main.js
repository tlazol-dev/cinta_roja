//sincrono: pila de ejecucion secuencial
//asincrono : hilos de ejecucion
//main es el hilo de ejecucion principal delega las funciones asicronas
//otros hilos de ejecucion secundarios que se delegan porque pueden tardar mas tiempo en ejecutarse (se ejecutan al mismo tiempo pero por separado)
//lectura sincrona, ejecucion asincrona
//for se ejecuta en main
//la respuesta solo llega hasta que la cola de ejecuciuon esta vacia
//callback es una funcion anonima
//callback funcion que recibe como parametro otra funcion
//setTimeOut recibe 2 parametros : callback y el tiempo en que se ejecutara

console.log(1)

setTimeout(() => {
    console.log(2)
} , 3000)

// for( var i = 0; i < 99999; i++);


console.log(3)
console.log(4)

