
const { default: expect } = require('expect');
const Posicion=require('../main/Posicion.js');
const Tablero=require('../main/Tablero.js');


test("Encender",()=>{
    var tablero=new Tablero();
    tablero.crearTablero();
    
    expect(tablero.tablero[0,1].estadoActual()).toBe(0);
})
