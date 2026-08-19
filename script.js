let datos = [];
let filaSeleccionada = -1;

const formulario = document.getElementById("formulario");
const tabla = document.getElementById("tablaDatos");

function mostrarDatos(){

    tabla.innerHTML="";

    datos.forEach((persona, indice)=>{

        let fila = `
        <tr onclick="seleccionar(${indice})">
            <td>${persona.nombre}</td>
            <td>${persona.apellido}</td>
            <td>${persona.edad}</td>
            <td>${persona.curso}</td>
        </tr>
        `;

        tabla.innerHTML += fila;

    });

}

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const nombre=document.getElementById("nombre").value;
    const apellido=document.getElementById("apellido").value;
    const edad=document.getElementById("edad").value;
    const curso=document.getElementById("curso").value;
    const indice=document.getElementById("indice").value;

    let persona={
        nombre,
        apellido,
        edad,
        curso
    };

    if(indice===""){
        datos.push(persona);
    }else{
        datos[indice]=persona;
        document.getElementById("indice").value="";
    }

    formulario.reset();
    mostrarDatos();

});

function seleccionar(indice){

    filaSeleccionada=indice;

    document.getElementById("nombre").value=datos[indice].nombre;
    document.getElementById("apellido").value=datos[indice].apellido;
    document.getElementById("edad").value=datos[indice].edad;
    document.getElementById("curso").value=datos[indice].curso;

}

document.getElementById("editar").addEventListener("click",function(){

    if(filaSeleccionada==-1){
        alert("Seleccione un registro.");
        return;
    }

    document.getElementById("indice").value=filaSeleccionada;

});

document.getElementById("eliminar").addEventListener("click",function(){

    if(filaSeleccionada==-1){
        alert("Seleccione un registro.");
        return;
    }

    datos.splice(filaSeleccionada,1);

    filaSeleccionada=-1;

    formulario.reset();

    mostrarDatos();

});