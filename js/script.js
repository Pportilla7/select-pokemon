let boton=document.getElementById('get-pokemon');
let contenedor_pokemon_mostrar=document.getElementById('pokemon-mostrar');
console.log(contenedor_pokemon_mostrar);
const url='https://pokeapi.co/api/v2/pokemon/';



boton.addEventListener('click', function(){
    let pokemon_elegido=document.getElementById('pokemon-select').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_elegido}`)
    .then((response)=>{
        if(!response.ok){
            throw new Error('La solicitud NOK');
        }
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        contenedor_pokemon_mostrar.innerHTML='';

        let contenedor_pokemon=document.createElement('div');

        let lista=document.createElement('ul');
        let nombre=document.createElement('li');
        nombre.innerText='Nombre: '+data.name;
        lista.appendChild(nombre);

        let imagen_li=document.createElement('li');
        let imagen=document.createElement('img');
        imagen_li.appendChild(imagen);
        imagen.src=data.sprites.front_default;
        lista.appendChild(imagen_li);

        let peso=document.createElement('li');
        peso.innerText='Peso: '+data.weight;
        lista.appendChild(peso);

        let altura=document.createElement('li');
        altura.innerText='Altura: '+data.height;
        lista.appendChild(altura);

        let tipo=document.createElement('li');
        if(data.types.length==1){
            tipo.innerText='Tipo: '+data.types[0].type.name;
        }
        else{
            tipo.innerText='Tipo: '+data.types[0].type.name+'-'+data.types[1].type.name;
        }
       
        lista.appendChild(tipo);

        contenedor_pokemon.appendChild(lista);

        contenedor_pokemon_mostrar.appendChild(contenedor_pokemon);

        
    })
    .catch((error) => {
        console.error('Error al obtener los personajes:', error);
    });
});
