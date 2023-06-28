

const contenedorViajes = document.querySelector('#contenedor-viajes')

console.log(contenedorViajes)

const arrayViajes = [1, 2, 3]

const fragment = document.createDocumentFragment();

console.log(fragment)

arrayViajes.forEach((item) => {
    const cajaFoto = document.createElement('FIGURE');
    cajaFoto.classList.add('borde');


    
    fragment.append(cajaFoto)
})

console.log(fragment)

contenedorViajes.append(fragment)

console.log(fragment)