// Crear un array vacío llamado 'toDoItems'
// Tu codigo acá:
const toDoItems = [];

// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
// Tu código acá:
const autorCreated = document.querySelector('#createdBy');
autorCreated.innerHTML="Aplicacion creado por Edson";



// Crear una clase denominada 'ToDo' cuyo constructor debe recibir un único parámetro del tipo string
// con el nombre 'description' que será justamente la descripción del ToDo.
// Agregar dos propiedades a la clase:
// 1) 'description' : debe ser igual a la descripción pasada como parámetro al constructor
// 2) 'complete'    : debe setearse en false
// Ayuda: usar 'this' en el constructor

function ToDo(description,index) {
  // Tu código acá:
  this.description=description;
  this.complete = false;
  this.index=index;
}

// Agregar un método denominado 'completeToDo' al prototipo de la clase ToDo
// No requiere ningún argumento
// Debe setear el atributo 'complete' del ToDo en true

// Tu código acá:
 ToDo.prototype.completeToDo= function(){
  this.complete=true;
 }

// Agregar dos parámetros a la función 'buildToDo':
//    1) Un objeto de la clase ToDo
//    2) Index numérico
//
// La función debe realizar lo siguiente:
//    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
//    2) Asignarle a 'toDoShell' la clase 'toDoShell'
//    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
//    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
//       asignándole el valor de la propiedad 'description' del objeto ToDo.
//    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
//    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
//          - Si es true: asignarle a 'toDoText' la clase 'completeText'
//          - Si es false: no asignarle ninguna clase
//    7) Agregar 'toDoText' como hijo de 'toDoShell'
//    8) Devolver la variable toDoShell

function buildToDo(todo, index) {
  // Tu código acá:
   
  // Crear un elemento 'input' de tipo 'checkbox'
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className="completeText";

   
  // Asignarle el ID del checkbox con el valor del índice
  checkbox.id = `toDoText-${index}`;

  // Agregar el 'click' event listener al checkbox en lugar de 'toDoText'
  checkbox.addEventListener('click', completeToDo);
  //1) Crear un div
  let toDoShell = document.createElement("div");
  //2) Asignar a toDoShell la clase toDoShell
  toDoShell.className="toDoShell";
  //3) Crear un elemento span y asignar a toDoText
  let toDoText = document.createElement("span") ;
  //4) Asignar el valor todo.description del objeto ToDo.
  toDoText.innerHTML=todo.description;
  //5) Asignar id del toDoText al valor index 
  toDoText.id=`toDoText-${index}`;
 
  
   
 //6) Si es true: asignar a toDoText la clase completeText si es false no asignar
  function completeToDo(event) {
  const index = event.target.id;
  const checkbox = event.target; // Obtén una referencia al checkbox

   

  // Actualizar la clase del texto
  const toDoText = document.getElementById(index);
  if (checkbox.checked) {
    toDoText.className = "completeText";
    checkbox.className=""
    checkbox.checked=true;
  } else {
    toDoText.className = "";
    checkbox.checked=false;
    checkbox.className="completeCheckbox";
  }
 
}
 //7) Agregar toDoText como hijo de toDoShell
 toDoShell.appendChild(toDoText);
 toDoShell.appendChild(checkbox);
//8) Devolver la variable toDoShell
 return toDoShell;
}

// La función 'buildToDos' debe crear un array de objetos toDo y devolverlo
// Recibirá como parámetro un array de objetos ToDo
// Utilizar el método map usando la función previamente creada ('buildToDo')
// Devolver el nuevo array

function buildToDos(toDos) {
  // Tu código acá:
  // Utiliza el metodo map para crear un nuevo array de lementos div
  const toDoElements = toDos.map((todo,index)=>{
     
    return buildToDo(todo,index);
  });
  // Devulve el nuevo array de elementos div
  return toDoElements;
 
}

// La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
//  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
//  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
//  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
//  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
//  5) Al final de este archivo, antes de la línea que dice "NO CAMBIES NADA DE ACÁ PARA ABAJO" escribe una
//     línea para hacer el llamado a esta funcion (displayToDos)
//  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página

function displayToDos() {
  // Tu código acá:

  //1) Seleccionar el elemento 'toDoContainer'
  let toDoContainer=document.querySelector('#toDoContainer');

  //2) Setear con un string vacio toDoContainer
  toDoContainer.innerHTML="";

  //3) Llama la funcion buildTodos pasando el argumento el array toDoItems
  const toDoElements = buildToDos(toDoItems);

  //4)Iterar el resultado devuelto de buildTodos, agregando toDoContainer
  toDoElements.forEach(function(toDoElement)  {
  toDoContainer.appendChild(toDoElement);
});

}

// La función 'addToDo' agregará un nuevo ToDo al array 'toDoItems'
// [NOTA: Algunas cuestiones a tener en cuenta sobre el elemento 'input' de HTML (Ya que 'toDoInput' es un input)
// Todos los elementos input tienen una propiedad llamada 'value' que nos permite acceder al texto que se encuentre
// actualmente escrito dentro del input]
//  1) Crear un nuevo ToDo usando la clase ToDo y pasándole el valor del input 'toDoInput' como parámetro
//  2) Agregar el objeto ToDo recién creado al array toDoItems
//  3) Setear el valor del input toDoInput como un string vacio ("") (Esto se realiza para que en la vista se borre lo que se encontraba escrito)
//  4) Llamar a la función displayToDos para que se actualicen los toDos mostrados en pantalla

function addToDo() {
  // Tu código acá:
  //1) Crear un nuevo ToDo usando la clase ToDo
  let newToDo= new ToDo(document.getElementById('toDoInput').value);

  //2) Agregar el objeto ToDo recien creado al array toDoItems
  toDoItems.push(newToDo);

  //3) Setear el valor del input toDoInput con una cadena vacia ""
  document.getElementById('toDoInput').value="";

  //4) Llamar a la funcion displayTodos
  displayToDos();
  

}

// Agregar un 'Event Listener' para que cada vez que el botón 'AGREGAR' sea clickeado
// se ejecute la función 'addToDo'
//   1) Seleccionar el elemento cuyo id es 'addButton'
//   2) Agregarle un 'click' event listener, pasándole la función 'addToDo' como callback

// Tu código acá:

// 1) Seleccionar el addButton
const addButton=document.getElementById('addButton');

// 2) Event click listner a la funcion addToDo como callback
addButton.addEventListener('click',addToDo);

// La función completeToDo se va a ejecutar cuando queramos completar un todo
// [NOTA: Algunas cuestiones a tener en cuenta
// Todo Event Listener recibe como parámetro el objeto 'event' conteniendo un montón de información que incluye
// el tipo del evento, que elemento fue el que lo llamó, los valores de dicho elemento, etc.
// En este paso vamos a utilizarlo para encontrar el index del item que disparó el evento (Esta parte ya se
// encuentra desarrollada pero está comentada dentro de la función por lo que va a ser necesario que la descomenten)]
//   1) Utilizando el index suministrdo, llamar a 'completeToDo' (Recuerden que habíamos creado dcho método en el
//      prototipo de la clase ToDo) sobre el elemento correspondiente del array toDoItems
//   2) Llamar a displayToDos para actualizar los elementos que se van a mostrar en pantalla
//   3) En la función 'buildToDo' agregar un 'click' event listener al elemento 'toDoText', pasándole
//      esta función como callback

function completeToDo(event) {
  // DESCOMENTAR LA SIGUIENTE LINEA
  const index = event.target.id;
  // Tu código acá:
  // 1) Utilizando el index suministrado 
        toDoItems[index].completeToDo();
        
  // 2) Llamar la funcion displayTodos
      displayToDos();
  // 3) Agregar click event listener al elemento toDoText como callback
  // Actualizar la clase del texto
  const toDoText = document.getElementById(`toDoText-${index}`);
   
      //const toDoText = document.getElementById(index);
      toDoText.addEventListener('click',completeToDo);

}

// Una vez que llegaste a este punto verificá que todos los tests pasen

// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/
// ********************************************** ----------- ********************************************** //

// Acá debes insertar la llamada a 'displayToDos'
displayToDos();

// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== "undefined") {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo,
  };
}
