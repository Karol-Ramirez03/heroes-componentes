import './js/hero.js';
const divcont = document.querySelector('#container')
const heroes = [
    {
        nombre : 'Iron Man',
        imagen : 'images/ironman.jpg',
        descripcion : 'Iron Man es un superhéroe que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje fue creado por el escritor y editor Stan Lee en colaboración con el guionista Larry Lieber.​',
        fechaComic :'',
        casaProductora : 'Marvel',
    },
    {
        nombre : 'Flash',
        imagen : 'images/flash.jpeg',
        descripcion : 'Flash es el nombre de varios superhéroes ficticios que aparecen en los cómics estadounidenses publicados por DC Comics. Creado por el escritor Gardner Fox y el artista Harry Lampert',
        fechaComic :'',
        casaProductora : 'DC',
    },
    {
        nombre : 'spiderman',
        imagen : 'images/spide.jpg',
        descripcion : 'es un personaje creado por los estadounidenses Stan Lee y Steve Ditko, ​​ e introducido en el cómic Amazing Fantasy n.° 15, publicado por Marvel Comics en agosto de 1962.',
        fechaComic :'',
        casaProductora : 'Marvel',
    },
    {
        nombre : 'Wonder Woman',
        imagen : 'images/ww.webp',
        descripcion : 'La Mujer Maravilla es una superheroína ficticia creada por William Moulton Marston y H. G. Peter para la editorial DC Comics. Es una princesa guerrera de las Amazonas, pueblo ficticio basado en el de las amazonas de la mitología griega',
        fechaComic :'',
        casaProductora : 'DC',
    },
    {
        nombre : 'Hulk',
        imagen : 'images/hulk.jpg',
        descripcion : 'Hulk, es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics, siendo considerado el personaje más fuerte de la editorial. Fue creado por los escritores Stan Lee y Jack Kirby',
        fechaComic :'',
        casaProductora : 'DC',
    },
    {
        nombre : 'Batman',
        imagen : 'images/batman.webp',
        descripcion : 'Batman es un superhéroe ficticio de cómic creado por los estadounidenses Bob Kane y Bill Finger, y propiedad de DC Comics.',
        fechaComic :'',
        casaProductora : 'DC',
    },
    {
        nombre : 'Wolverine',
        imagen : 'images/wolverine.webp',
        descripcion : 'Wolverine, cuyo nombre de nacimiento es James Howlett, ​ es un superhéroe y antihéroe ficticio que aparece en los cómics publicados por Marvel Comics, principalmente en asociación con los X-Men',
        fechaComic :'',
        casaProductora : 'Marvel',
    },
    {
        nombre : 'Superman',
        imagen : 'images/superman.webp',
        descripcion : 'Superman (cuyo nombre kryptoniano es Kal-El y su nombre terrestre es Clark Kent, o Clark Joseph Kent) un superhéroe ficticio que apareció por primera vez por Action Comics, perteneciente al grupo de cómics estadounidenses publicados por DC Comics.',
        fechaComic :'',
        casaProductora : 'DC',
    },
    {
        nombre : 'Viuda Negra',
        imagen : 'images/viuda.jpg',
        descripcion : 'Viuda Negra ​ es una personaje de los cómics estadounidenses publicados por Marvel Comics. Creada por el editor y trazador Stan Lee, el guionista Don Rico y el artista Don Heck, el personaje debutó en Tales of Suspense #52.​​',
        fechaComic :'',
        casaProductora : 'Marvel',
    },
    {
        nombre : 'Aquaman',
        imagen : 'images/aqua.jpg',
        descripcion : 'Aquaman es el gobernante telepático de la Atlántida y de los océanos de la Tierra, un Atlante con increíble fuerza y ​​velocidad, así como la capacidad de ordenar toda la vida marina.',
        fechaComic :'',
        casaProductora : 'DC',
    },
]
document.addEventListener('DOMContentLoaded', (e) => {
    heroes.forEach(item =>{
        divcont.insertAdjacentHTML('beforeend', `
        <card-hero class ="g-3 col-2 col-sm-3 ">
        <span slot ='imagen'> <img class="card-img-top" src="${item.imagen}" alt="${item.nombre}"></span>
        <span slot ='nombre'>${item.nombre}</span>
        <span slot = 'descripcion'>${item.descripcion}</span>
        <span slot = 'fechaComic'>${item.fechaComic}</span>
        <span slot = 'casaProductora'>${item.casaProductora}</span>
        </card-hero>
        `);
    })
})