const input = document.getElementById("input");
const btn_todo = document.getElementById("btn_todo");
const container_todo = document.querySelector(".container_todo");
let id=1;
/*
<div class="container_list">
<div class="div container_list-1">
    <input type="checkbox" class="casilla">
    <p class="actividad">Tarea</p>
</div>
<div class="div container_list-btn">
    <button class="btn-eliminar"><i class="fa-regular fa-trash-can"></i></button>
    <button class="btn-actualizar"><i class="fa-regular fa-pen-to-square"></i></button>
</div>
</div>
*/

function addTodo(){
    //Crear los elementos
    const div_todo = document.createElement("div");
    const div_container = document.createElement("div");
    const checkbox = document.createElement("input");
    const parrafo = document.createElement("p");
    const div_boton = document.createElement("div");
    const button_eliminar = document.createElement("button");
    const icono1 = document.createElement("i");
    const button_actualizar = document.createElement("button");
    const icono2 = document.createElement("i");

    /*Añadir atributos y clases */
    parrafo.innerHTML = input.value;
    div_todo.classList.add("container_list");
    div_container.classList.add("container_list-1");
    checkbox.classList.add("casilla");
    checkbox.setAttribute("type", "checkbox");
    parrafo.classList.add("actividad");
    div_boton.classList.add("container_list-btn");
    button_eliminar.classList.add("btn-eliminar");

    button_eliminar.setAttribute("id", id++);

    icono1.classList.add("fa-regular", "fa-trash-can");

    //juntamos todo y lo mostramos

    div_todo.appendChild(div_container);
    div_todo.appendChild(div_boton);
    div_container.appendChild(checkbox);
    div_container.appendChild(parrafo);
    button_eliminar.appendChild(icono1);
    div_boton.appendChild(button_eliminar);

    //Agregar todo el paquete al contenedor general
    container_todo.appendChild(div_todo);

    input.value = "";

    //funcionalidad eliminar tarea
    function removerTarea(id){
        document.getElementById(id).parentElement.parentElement.remove();

    }

    button_eliminar.addEventListener("click", () =>{
        removerTarea(button_eliminar.getAttribute("id"));
    });

}

btn_todo.addEventListener("click", () =>{
    if(input.value == "" || input.value.trim() == ""){
        window.alert("input vacio");
    }else{
        addTodo();
    }
});