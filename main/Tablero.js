const Posicion = require("./Posicion");

function Tablero(){
    this.tablero=[];
    this.crearTablero=function(){
        var i=0;
        var j=0;
        for(i;i<100;i++){
            for(j;j<100;j++){
                this.tablero[i,j]=new Posicion(i,j);
            }
        }
        return "Tablero Creado";
    }
    this.encender=function(verticeSuperior,verticeInferior){
        var i=verticeSuperior.posiciony;
        var j=verticeSuperior.posicionx;
        for(i;i<=verticeInferior.posiciony;i++){
            for(j;j<=verticeInferior.posicionx;j++){
                (this.tablero[i,j]).cambiarEstado("Encendido");
            }
        }
    }
    this.apagar=function(verticeSuperior,verticeInferior){
        for(i=verticeSuperior.posiciony;i<=verticeInferior.posiciony;i++){
            for(j=verticeSuperior.posicionx;j<=verticeInferior.posicionx;j++){
                (this.tablero[i,j]).cambiarEstado("Apagado");
            }
        }
    }

    this.cambiar=function(verticeSuperior,verticeInferior){
        var i=verticeSuperior.posiciony; 
        var j=verticeSuperior.posicionx;
        while(i<=verticeInferior.posiciony){
            while(j<=verticeInferior.posicionx){
                if(this.tablero[i,j].estadoActual()=="Encendido"){
                    this.tablero[i,j].cambiarEstado("Apagado");
                }
                else{
                    this.tablero[i,j].cambiarEstado("Encendido");
                }
                j=j+1;
            }
            i=i+1;
        }
       
    }

    this.cantidadEncendidas=function(){
        var cont=0;
        for(columna in tablero){
            for(fila in tablero){
                if(columna[fila]=="Encendido"){
                    cont=cont+1
                }
            }
        }
        return cont;
    }
}

module.exports=Tablero;