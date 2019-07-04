//CLASES : Una clase tiene propiedades (atributos con valores) y acciones (metodos)

// OBJETOS LITERALES

var rectangulo = {
    base : 34,
    altura: 16
};

//console.log(rectangulo);

//-----------------------------------------------------------------------

//CLASES Y HERENCIA 
//SUBCLASES
//METODOS

// DECLARACION DE LA CLASE
class Poligono {
    // ATRIBUTOS
    constructor (alto, ancho){
//PROPIEDADES(ATRIBUTOS Y VALORES) usamos this para referirnos a las propiedades esta clase
        this.alto = alto;
        this.ancho = ancho;
    }
    //METODO (ACCIONES)
    getArea(){
        var area = this.alto * this.ancho;
        //console.log(`El area del poligono es: ${area}`);
        return area;
    }
}

//FUERA DE LA DECLARACION DE LA CLASE, DEFINIMOS UNA VARIABLE QUE ALMACENARA LA INSTANCIA DE LA CLASE CREADA (POLIGONO)
//usamos la palabra new para generar la instancia que dara cuerpo real a nuestra clase, ya con parametros definidos
var poligono = new Poligono(23, 12);

//llamamos a la instancia de la clase y al metodo que contiene la clase padre Poligono
poligono.getArea()

//---------------------------------------------------------------------------------------------------

class Vehiculo{
    constructor(color, marca, ruedas, tamanio, modelo){
    this.color = color;
    this.marca = marca;
    this.ruedas = ruedas;
    this.tamanio = tamanio;
    this.modelo = modelo;
    }

descripcion(){
    //console.log(` El ${this.modelo} esta avanzando con sus ${this.ruedas} ruedas, los autos ${this.marca} de color ${this.color} y tamaño ${this.tamanio} son muy buenos`); 
    }
}

class Motoneta extends Vehiculo{
    constructor(color, marca, ruedas, tamanio, modelo, portaobjetos){
        super(color, marca, ruedas, tamanio, modelo);
        this.portaobjetos = portaobjetos;
    }
    descripcion(){
    //console.log(` La ${this.marca} esta avanzando con sus ${this.ruedas} ruedas, las motos ${this.modelo} de color ${this.color} y tamaño ${this.tamanio} son muy buenas porque tienen un portaobjetos ${this.portaobjetos}`); 
        }

}

var auto = new Vehiculo ("negro", "nissan", 4, "familiar", "tsuru" );
auto.descripcion();

var moto = new Motoneta ("gris", "italika", 3, "individual", "34-BN", "grande" );
moto.descripcion();

//---------------------------------------------------------------------------------

class Jugador{
    constructor(nombre, puntos, poder, velocidad, golpe){
        this.nombre = nombre;
        this.puntos = puntos;
        this.golpe = true;
        this.poder = poder;
        this.velocidad = velocidad;
    }

        ataque (){
        if(this.golpe){
           console.log(`El jugador ${this.nombre} con ${this.puntos} puntos recibio un golpe y ahora tiene ${this.puntos - 5} puntos`);
        } else{
           console.log(`El jugador ${this.nombre} sigue invicto`);
        }
    }
    
} 

var jugador = new Jugador("bola de nieve", 10);
jugador.ataque();

class Jugador1 extends Jugador{
    constructor(nombre, puntos, poder, velocidad, planeta){
        super(nombre, puntos, poder, velocidad)
        this.planeta = planeta;
    }
        reestablecer(){
            if( `${jugador.this.nombre}` === "bola de nieve" && `${jugador.this.puntos}` === 5){
                console.log(`El jugador ${this.nomJbre} del planeta ${this.planeta} reestablecio tus puntos y ahora tienes ${this.puntos + 5} puntos`);
            }
        }
 
}

var jugador1 = new Jugador1("cara de hacha", "Orion", 5);
jugador1.reestablecer();



//--------------------------------------------------------------------------------

// class Maestro {
//     constructor(nombre, materia, calificaciones){
//         this.nombre = nombre;
//         this.materia = materia;
//         this.calificaciones = calificaciones;
//     }

    
//     calcularPromedio(){

//         var sumaTotal = 0;

//         for(var i = 0; i < this.calificaciones.length; i++){
//             sumaTotal += this.calificaciones[i];
//         }
//         //console.log(promedioFinal/this.calificaciones.length);
//         return (sumaTotal/this.calificaciones.length);
//     }
// }

// class MaestroDeFisica extends Maestro{
//     constructor(nombre, materia, calificaciones, antiguedad){
//         super(nombre, materia, calificaciones);
//         this.antiguedad = antiguedad
//     }
// }

// class MaestroDeMusica extends Maestro{
//     constructor(nombre, materia, calificaciones, edad){
//         super(nombre, materia, calificaciones);
//         this.edad = edad;
//     }
// }

// var prof_1 = new MaestroDeFisica('Berenice','fisica', [6, 7, 6, 8, 10], 4);
// var prof_2 = new MaestroDeMusica('Elva','musica', [9, 7, 8, 5, 7], 33);

// console.log(`Nombre: ${prof_1.nombre}, Materia: ${prof_1.materia}, Promedio: ${prof_1.calcularPromedio()}, Antiguedad: ${prof_1.antiguedad}`);
// console.log(`Nombre: ${prof_2.nombre}, Materia: ${prof_2.materia}, Promedio: ${prof_2.calcularPromedio()}, Edad: ${prof_2.edad}`);































