function primeraTabla(){
  var valorInput=document.getElementById("textoAgregar").value;
  var nuevoAgregado=document.createElement("li");

  nuevoAgregado.innerHTML=valorInput;
  document.getElementById("creada").appendChild(nuevoAgregado);
  document.getElementById("textoAgregar").value="";
}

function primeraTablados(){
  var valorInputdos=document.getElementById("textoAgregardos").value;
  var nuevoAgregadodos=document.createElement("li");

  nuevoAgregadodos.innerHTML=valorInputdos;
  document.getElementById("creadados").appendChild(nuevoAgregadodos);
  document.getElementById("textoAgregardos").value="";
}

function agregarLista(){
  var valorLista=document.getElementById("crearLista").value;
  var nuevaLista=document.createElement("ul");


}
