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
const aceituna=document.querySelector('#Aceitunas')
console.log(aceituna);
const claseTopping=document.querySelector('.toppings')
console.log(claseTopping)
const primerToppingNaranja=document.querySelector('.toppings.Naranja')
console.log(primerToppingNaranja)
const otraMezla=document.querySelector('ul li.Naranja')
console.log(otraMezla)
const primerToppingNoMarron=document.querySelector('ul li:not(.Marron)')
console.log(primerToppingNoMarron)

const noNaranja=document.querySelectorAll('li.Naranja');
console.log(noNaranja)

 /*CAMBIAR ESTILO CON JS */
const primerTopping=document.querySelector('.toppings')
console.log(primerTopping)
primerTopping.style.backgroundColor='red'
primerTopping.style.color='#6dff00'
primerTopping.style.textTransform='uppercase'

/*TEXTO EN EL DOM */
/*Obtener el texto */
const listaDeToppings=document.getElementById('listaToppings')
console.log(listaDeToppings)
console.log(listaDeToppings.innerText)
//textContent mantiene la indentacion del archivo HTML
console.log(listaDeToppings.textContent)
console.log(listaDeToppings.innerHTML)

/*MODIFICAR TEXTO */
const tituloPrueba=document.getElementById('titulo')
console.log(tituloPrueba)
tituloPrueba.innerText='Mis Toppings Favoritos'
console.log(tituloPrueba)

/*ATRIBUTOS */
const enlaces=document.getElementsByTagName('a')
console.log(enlaces[0].getAttribute('href'));
//podemos trabajar con el, modificarlo o eleiminarlo
//.removeAttribute
enlaces[0].removeAttribute('href')
console.log(enlaces[0].getAttribute('href'));
//modificar atributo
enlaces[0].setAttribute('href','https://www.freecodecamp.org')
console.log(enlaces[0].getAttribute('href'));

/*CLASES CSS */
//OJO!  classList necesita un elemento, no una colección(array) de elementos
const segundoTopping=document.getElementsByClassName('toppings Naranja Primero')
console.log(segundoTopping[0].classList)
//añadir clase css
segundoTopping[0].classList.add('miClase')
console.log(segundoTopping[0].classList)
//Verificar si una clase existe
//Nos da respuesta true o false
console.log(segundoTopping[0].classList.contains('miClase'))

//eliminar una clase
segundoTopping[0].classList.remove('miClase')
console.log(segundoTopping[0].classList)

/*CREAR ELEMENTO DESDE 0 */

const toppingNuevo=document.createElement('li');
//agregar clase a la lista de clases
toppingNuevo.classList.add('toppings','Marron');
toppingNuevo.innerText='Queso extra';
console.log(toppingNuevo)
listaDeToppings.append(toppingNuevo);
console.log(toppingNuevo.classList);
//con appendChild se agregan elementos, con solo append puedes agregar también texto simple
//ELIMINAR ELEMENTOS DOM
//toppingNuevo.remove();

/*RECORRER EL DOM*/
//obtenemos el elemento padre, para trabajar con el
console.log(listaDeToppings.parentElement)
console.log(listaDeToppings.parentElement.parentElement)
//lista nodos hijos
console.log(listaDeToppings.children)
console.log(listaDeToppings.firstChild)//no nos suele devolver el elemento, sino #text
console.log(listaDeToppings.firstElementChild) //este mejor
console.log(listaDeToppings.lastElementChild) 

console.log(listaDeToppings.previousElementSibling) //para los hermanos, mismo nivel
console.log(listaDeToppings.nextElementSibling) 

/*EVENTOS DEL DOM */
/*Algo que ocurre en el sitio web como resultado de la interacción del usuario,
 cambios en el estado del diispositivo, de la ventana...*/
 //ratón, teclado, ventana, arrastrar, táctiles...
 //Elemento target(a donde queremos enviar o recibir algo)
 //trigger(desencadennate)
 //event Handler (función que se ejecuta cuando ocurre un evento)
 //vamos a asociar un evento con una función (event listener)

function mostraClick(e){
    console.log(e)
    console.log(e.target)
    console.log(e.target.innerText)

}
//la funcion se pone sin () cuando lo ponemos en el addEventListener
toppingNuevo.addEventListener('click',mostraClick);

const todosLosToppings=document.getElementsByClassName('toppings')
for(const topping of todosLosToppings){
//console.log(topping)
topping.addEventListener('click',(e)=>{console.log(e.target.innerText)})
}
