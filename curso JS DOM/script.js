/*SELECCIONAR POR ID */

//getElementById --- Los ID deben de ser ÚNICOS o dará lugar a problemas!!
const contenedor = document.getElementById('contenedor');
console.log(contenedor.innerHTML);
// innerHTML nos da acceso a la estructura contenida en ese elemento
const titulo = document.getElementById('titulo');
console.log(titulo.innerText);
//innerText retorna el texto contenido dentro de ese elemento
//tagName nos devuelve el tipo de etiqiueta html del elemento en cuestión

/*SELECCIONAR POR CLASES */

//getElementByClassName
const toppings = document.getElementsByClassName('toppings')//si sabes que hay mas de un elemento en la misma clase, el nombre en plural
console.log(toppings)
//esto funciona como un array, se podría ver así:
console.log(toppings[0])
console.log(toppings[2].id)

/*SELECCIONAR POR ETIQUETA HTML */

//getElementByTagName, es una seleccion más general, sin importar la clase o ID específico
const misToppings=document.getElementsByTagName('li');
console.log(misToppings)
//comparación entre clase y etiqueta
const toppingsMarron=document.getElementsByClassName('toppings Marron')
console.log(toppingsMarron);

/*SELECCIONAR POR CSS */

//querySelector() - querySelectorAll()
//seleccionar un elemento que cumpla el criterio de css
const aceituna=document.querySelector('#aceitunas')
console.log(aceituna)