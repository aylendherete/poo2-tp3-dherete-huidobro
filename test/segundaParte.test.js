
const { default: expect } = require('expect');
const Posicion=require('../main/Posicion.js');
const Tablero=require('../main/Tablero.js');


test("Encender",()=>{
    var tablero=new Tablero();
    tablero.crearTablero();

    expect(tablero.tablero[0,1].estadoActual()).toBe(0);

    var posicionSuperior=new Posicion(1,0);
    var posicionInferior= new Posicion(2,2);
    tablero.encender(posicionSuperior,posicionInferior);
    expect(tablero.tablero[1,0].estadoActual()).toBe(1);
    expect(tablero.tablero[1,1].estadoActual()).toBe(1);
    expect(tablero.tablero[1,2].estadoActual()).toBe(1);
    expect(tablero.tablero[2,0].estadoActual()).toBe(1);
    expect(tablero.tablero[2,1].estadoActual()).toBe(1);
    expect(tablero.tablero[2,2].estadoActual()).toBe(1);
})
