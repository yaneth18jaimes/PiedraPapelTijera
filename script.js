var opciones = ["piedra", "papel", "tijera"];
var opciones = [0, 1, 2];
var eleccionMaquina;

function aleatorio(minimo, maximo){// da un numero aleatorio dandole en marametro del numero minimo y maximo
    var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    return numero;
}
function usuario(eleccionUsuario){ // funcion de eleccion del usuario y llamado de la funcion aleatoria para saber su respuesta
    eleccionUsuario = parseInt(eleccionUsuario);
    eleccionMaquina = aleatorio(0,2);

    if(eleccionUsuario == 0){//el usuario eligio piedra 
        if(opciones[eleccionMaquina] == 1){//si la maquina eligio papel  //0=piedra 1=papel 2=tijera
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>';
        }else{
            if(opciones[eleccionMaquina] == 2){//si la maquina eligio tijera //0=piedra 1=papel 2=tijer
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>';
            }else{
                if(opciones[eleccionMaquina] == 0){//si la maquina eligio piedra//0=piedra 1=papel 2=tijer
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>';
                }
            }
        } 
    }




if(eleccionUsuario == 1){//el usuario eligio papel 
    if(opciones[eleccionMaquina] == 2){//si la maquina eligio tijera //0=piedra 1=papel 2=tijera
        document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>';
    }else{
        if(opciones[eleccionMaquina] == 0){//si la maquina eligio piedra//0=piedra 1=papel 2=tijer
            document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>';
            
        }else{
            if(opciones[eleccionMaquina] == 1){//si la maquina eligio papel  //0=piedra 1=papel 2=tijera
                document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>'; 
            }
        }
    }
}

if(eleccionUsuario == 2) {//el usuario eligio tijera 
    if(opciones[eleccionMaquina] == 1){//si la maquina eligio papel  //0=piedra 1=papel 2=tijera
        document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>';
    
    }else{
        if(opciones[eleccionMaquina] == 0){//si la maquina eligio piedra//0=piedra 1=papel 2=tijer
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>'; 
        }else{
            if(opciones[eleccionMaquina] == 2) {//si la maquina eligio tijera //0=piedra 1=papel 2=tijer
                document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>';
            }
        }
    }
}

document.getElementById('efecto').style.display = "";
}
function quitarEfecto() {
    document.getElementById('efecto').style.display = "none";
}