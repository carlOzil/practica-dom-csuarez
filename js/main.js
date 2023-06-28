
// VARIABLES --->>>

const contenedorViajes = document.querySelector('#contenedor-viajes');

const contenedorBienvenidos = document.querySelector('#contenedor-welcome');

const contenedorDestinos = document.querySelector('#select-destinos');

const fragment = document.createDocumentFragment();


// ARRAYS --->>>

const arrayBienvenidos = [{
    url: './img/3.jpg',
    alt: 'cielo al anochecer'
},
{
    url: './img/5.jpg',
    alt: 'luna entre nubes'
},
{
    url: './img/7.jpg',
    alt: 'bandada de pajaros al atardecer'
},
{
    url: './img/8.jpg',
    alt: 'rama de castañas en blanco y negro'
}];


const arrayViajes = [{
    url: './img/viajes-1.jpg',
    alt: 'mujer en hamaca',
    msg: 'Playas paradisiacas'
},
{
    url: './img/viajes-2.jpg',
    alt: 'pasarela hacia a cabañas sobre el agua',
    msg: 'Las maldivas'
},
{
    url: './img/viajes-3.jpg',
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
    text: 'opcion 3'


}];


// FUNCIONES --->>>

const pintarPostales=()=>{

arrayViajes.forEach((item) => {
    const cajon = document.createElement('FIGURE');
    cajon.classList.add('postal');
    const caja = document.createElement('DIV');
    const imagen = document.createElement('IMG');

    imagen.src = `img/${item.url}`

    caja.append(imagen);
    cajon.append(caja)
    fragment.append(cajon)

})

contenedorViajes.append(fragment)
}


// INVOCACIONES --->>>

pintarPostales()