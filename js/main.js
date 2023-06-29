
// VARIABLES --->>>

const contenedorBienvenidos = document.querySelector('#contenedor-welcome');

const contenedorViajes = document.querySelector('#contenedor-viajes');

const contenedorDestinos = document.querySelector('#select-destinos');

const fragment = document.createDocumentFragment();


// ARRAYS --->>>

const arrayBienvenidos = [{
    url: 'img/3.jpg',
    alt: 'cielo al anochecer'
},
{
    url: 'img/5.jpg',
    alt: 'luna entre nubes'
},
{
    url: 'img/7.jpg',
    alt: 'bandada de pajaros al atardecer'
},
{
    url: 'img/8.jpg',
    alt: 'rama de castañas en blanco y negro'
}];


const arrayViajes = [{
    url: 'img/viajes-1.jpg',
    alt: 'mujer en hamaca',
    msg: 'Playas paradisiacas'
},
{
    url: 'img/viajes-2.jpg',
    alt: 'pasarela hacia a cabañas sobre el agua',
    msg: 'Las maldivas'
},
{
    url: 'img/viajes-3.jpg',
    alt: 'paseo de acantilado con paso a nivel',
    msg: 'Pasos a nivel naturales'
}];


const arrayDestinos = [{
    value: 'op1',
    text: 'Granada'
},
{
    value: 'op2',
    text: 'Bogotá'
},
{
    value: 'op3',
    text: 'Amsterdam'
},
{
    value: 'op4',
    text: 'París'


}];


// EVENTOS --->>>

contenedorBienvenidos.addEventListener('click',()=>{
	contenedorBienvenidos.style.border='10px solid yellow'
})

contenedorViajes.addEventListener('click',()=>{
	contenedorViajes.style.border='10px solid green'
})

contenedorDestinos.addEventListener('click',()=>{
	contenedorDestinos.style.border='5px solid red'
})


// FUNCIONES --->>>

const randomBanners = () => {

    const cambio = Math.floor(Math.random() * arrayBienvenidos.length)

    const imgRandom = document.createElement('IMG')

    imgRandom.src = arrayBienvenidos[cambio].url

    contenedorBienvenidos.append(imgRandom)
}



const pintarPostales = () => {

    arrayViajes.forEach((item) => {
        const cajonFotos = document.createElement('FIGURE');
        const caja = document.createElement('DIV');
        // FALLA! PREGUNTAR como poner una clase a cada figure desde JS caja.classList.add('caja1', 'caja2', 'caja3')

        const imagen = document.createElement('IMG');

        imagen.src = item.url;

        caja.append(imagen);
        cajonFotos.append(caja);
        fragment.append(cajonFotos)

    });

    contenedorViajes.append(fragment)
};

const selectDest = () => {
    const selector = document.createElement('SELECT')
    arrayDestinos.forEach((item) => {
        const ciudades = document.createElement('OPTION');

        ciudades.text = item.text

        selector.append(ciudades)
    });

    contenedorDestinos.append(selector);
    contenedorDestinos.append(fragment)
}


// INVOCACIONES --->>>

selectDest();
randomBanners();
pintarPostales()