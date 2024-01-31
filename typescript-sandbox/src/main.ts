import "./style.css";

console.log("Hello Typescript!");

/*Queremos implementar una pantalla en la que aparezca un display con el turno actual de una clínica y un botón para pasar al siguiente turno 
y otro para volver al anterior.

A implementar:

Básico:
En grande se muestra el turno.
El operario puede ir dándole a siguiente o anterior y el turno cambia.
Además de esto vamos a añadir un botón de reset que pone el turno a 0.
Avanzado:
Como challenge puedes añadir una caja de texto y un botón que permita cambiar el turno a un valor que ponga el operario.
Challenge:
Sea el número que sea, lo quiero mostrar siempre con dos digitos (es decir el 1 -> 01, el 2 -> 02, el 10 -> 10, el 11 -> 11, etc), investiga 
como puedes formatear un número para que siempre tenga dos dígitos.
Pista: Puedes usar la función padStart, la cual nos ayuda a añadir ceros o cualquier otro carácter que queramos al principio de una cadena de texto..

Si lo implementas en TypeScript en modo estricto, mejor que mejor.*/

//************************************

let turno = (0);

function sumar (){
    turno = turno+1;
    const parrafoResultado = document.getElementById("resultado");
if(parrafoResultado !== null && 
    parrafoResultado !== undefined && 
    parrafoResultado instanceof HTMLParagraphElement)
{
parrafoResultado.textContent = turno.toString().padStart(2,"0");
}
}

const botonsumar = document.getElementById("sumar");
if(botonsumar !==null && 
    botonsumar !== undefined && 
    botonsumar instanceof HTMLButtonElement)
    {
        botonsumar.addEventListener("click",sumar);
    }

//*************************************************

function restar (){
    turno = turno - 1;
    const parrafoResultado = document.getElementById("resultado");
if(parrafoResultado !== null && 
    parrafoResultado !== undefined && 
    parrafoResultado instanceof HTMLParagraphElement)
{
parrafoResultado.textContent = turno.toString().padStart(2,"0");
}
}

const botonrestar = document.getElementById("restar");
if(botonrestar !==null && 
    botonrestar !== undefined && 
    botonrestar instanceof HTMLButtonElement)
    {
        botonrestar.addEventListener("click",restar);
    }

//***********************************************************

function reseteo (){
    turno = 0;
    const parrafoResultado = document.getElementById("resultado");
    if(parrafoResultado !== null && 
        parrafoResultado !== undefined && 
        parrafoResultado instanceof HTMLParagraphElement)
    {
    parrafoResultado.textContent = turno.toString().padStart(2,"0");
    }
}
const botonreseteo = document.getElementById("reseteo");
if (botonreseteo !== null &&
    botonreseteo !== undefined &&
    botonreseteo instanceof HTMLButtonElement)
    {
        botonreseteo.addEventListener("click",reseteo);
    }

//*****************************************************
 

const minumero = document.getElementById("minumero")

function yodecido(){
    const parrafoResultado = document.getElementById("resultado");
    const numeroturno = document.getElementById("numeroturno")
    
if (numeroturno !== null &&
    numeroturno !== undefined &&
    numeroturno instanceof HTMLInputElement)
    {
        turno = parseInt(numeroturno.value)
        
        if( parrafoResultado !== null && 
    parrafoResultado !== undefined && 
    parrafoResultado instanceof HTMLParagraphElement)
    {
    parrafoResultado.textContent = turno.toString().padStart(2,"0");
    }
    }

}

if (minumero !== null && 
    minumero !== undefined && 
    minumero instanceof HTMLButtonElement)
{
    minumero.addEventListener("click",yodecido);
}

