const pokeApi = {}// Cria o objeto pokeApi

const pokemonList = document.getElementById('session1')//Pega a ID da lista de pokemons(ol) 
var actualPage;
var pokemonId;

let varUrl = window.location.href;
    //let linkVars = varPage.slice(varPage.indexOf('?'));
    let linkVars = varUrl.split('?');

    pokemonId = linkVars[1];
    actualPage = linkVars[2];
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    /*function convertPokeApiDetailToPokemon(pokeDetail) {//Converte o modelo da pokedex oficial para a classe Pokemon
        // criada em poke-model.js
            const pokemon = new Pokemon()// Cria uma nova instancia da classe Pokemon
            console.log(pokeDetail)
            pokemon.number = pokeDetail.id//pega o ID recebido na function como pokeDetail
            pokemon.name = pokeDetail.name//pega o name recebido na function como pokeDetail
        
            const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)//
            const [type] = types//pega o type principal da array(o primeiro)
        
            pokemon.types = types
            pokemon.type = type
        
            pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
        
            return pokemon
        }*/
    
    async function getPokemonDetails() {
        //let pokeDetails = (url)=>{
        //alert (url)
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
          } catch (error) {
            console.error(error);
            throw error;
        
        //  fetch(url)
        // .then((response)=> response.json())
        // .then((pokemon)=>{
        //         //console.log(pokemon)     
                
        //         /*let name = pokemon.name;
        //         let types = pokemon.types;
        //         let photo = pokemon.sprites.other.dream_world.front_default;
        //         let height = pokemon.height * 10;
        //         let weight = pokemon.weight;*/
            
        //     // alert(pokemon)
            
        //     return pokemon;    

        // })
    }
}
    //const newHtml = 
    function aboveContainer(pokemonData){

        let id = pokemonData.id;
        let name = pokemonData.name;
        let photo = pokemonData.sprites.other.dream_world.front_default;

        return `

        <ol class = "idName">
            <li class="name"><h1 class="h1Name">${name}</h1></li>
            <li class="number"># ${id}</li>
        </ol>
       
        <ol id="types" class="types">
           
        </ol>
        <ol class="imgContent">
            <li class="liImg">
                <img src="${photo}" alt="imagem"> 
            </li>
        </ol>`
    }
   
   function pokeTypes(pokemonData){

    

    //console.log(pokemon)

    const typeListItems = pokemonData.types.map((type,index) =>{

        let pokeType = type.type.name;//O primeiro type se refere a função
        
        if (index === 0) {
            firstPokeType = pokeType;
        }
    return "<li class='type "+pokeType+"'>"+pokeType+"</li>"

    }).join('')

    return { firstPokeType, typeListItems };

}
function pokemonStats(pokemonData){

    let hp
    let attack
    let defence
    let specialAttack
    let specialDefence
    let speed

    let result = ''; // Inicialize uma variável para armazenar o resultado

    const statsList = pokemonData.stats.map((stats)=>{
        let ability = stats.stat.name;
        let value = stats.base_stat;
        
        
        switch (ability){

            case 'hp':
                hp = value;
                case 'attack':
                    attack = value;
                    case 'defence':
                defence = value;

                case 'special-attack':
                specialAttack = value;

                case 'special-defence':
                specialDefence = value;

                case 'speed':
                speed = value;

            break;
        }
        
          // Concatene as partes dinâmicas na variável result
    result += `
    <ol class="types">
      <li class="typeLabel">${ability}</li>
      <li class="typeContent">${value}</li>
    </ol>`;
    
})
    return result;

}

getPokemonDetails()//pega os dados da consulta fetch
.then(data => {
    //Envia os dados da response para HTMl
    above.innerHTML = aboveContainer(data);
    // armazena os e valores da função e armazena na variável
     let resultTypes = pokeTypes(data);
    types.innerHTML = resultTypes.typeListItems;//Envia os tipos para o HTML
    //Envia o valor do primeiro tipo contido na variável resultTypes para o HTML
    session2.innerHTML = 
    `
        <li id="stats" class="stats ${resultTypes.firstPokeType}"> ${pokemonStats(data)}</li>`;
})

// function convertPokemonToLi() {
//     //${pokemon.id}
//     //${pokemon.name}
//     let pokemon = pokeDetails();
//     let types = pokemon.types;
//     console.log(pokemon)
//     /*pokemon.map((types,i)=>{
//         let tipo = types.type.name;
        
//         console.log("teste "+tipo)

//     })*/
// }

//     return `
//     <li class="above">
//     <span class="number">#Teste</span>
//             <span class="name"><h1>#Teste</h1>
//                 <ol class="types">
//                 ${pokemon.types.map((types,i) => 
//                      tipo = types.type.name `<li class="type ${type.name}">${type.name}</li>`).join('')}
               
//                 </ol>
//             </span>

//             <div class="detail">
               
//                 <img src="#" alt="#"/>
// </ol>
// <ol id="session2" class="pokemons">
    

//         <li class="pokemon grass">
            
//                 <ol class="types">
//                     <li class="grass">Height</li>
//                     <li class="poison">30</li>
//                 </ol>
//                 <ol class="types">
//                     <li class="grass">weight</li>
//                     <li class="poison">40</li>
//                 </ol>
//                 <span class="name">Habilities:</span>
//                 <ol class="types">
//                     <li class="grass">rain-dish</li>
//                     <li class="poison">torrrent</li>
//                 </ol>
//                 <ol class="types">
//                     <li class="grass">HP</li>
//                     <li class="poison">30</li>
//                 </ol>
//                 <ol class="types">
//                     <li class="grass">Attack</li>
//                     <li class="poison">30</li>
//                 </ol>
//                 <ol class="types">
//                     <li class="grass">Defence</li>
//                     <li class="poison">30</li>
//                 </ol>
//                 <ol class="types">
//                     <li class="grass">Special Attack</li>
//                     <li class="poison">30</li>
//                 </ol>
//                 <ol class="types">
//                     <li class="grass">Special Defence</li>
//                     <li class="poison">30</li>
//                 </ol>
//                 <ol class="types">
//                     <li class="grass">Speed</li>
//                     <li class="poison">30</li>
//                 </ol>
//             </div>
            
//     </div>
//         </li>
// </ol-->

//     `    


//function loadPokemonItens() {
        //let pokemon = pokeDetails();
        // const newHtml = body
        //para uma lista de <li>(map(convertPokemonToLi)) e junta essa lista sem separador (join(''))
        //o pokemons.map serve como um for já que pokemons = [] transformou em uma array
        // pokemonList.innerHTML += newHtml//insere dentro de <lo>(pokemonList) toda a lista de pokemons
        // concatenada (newHtml)
    //}
//  })
//pokeDetails(url);
//alert(tipos())
//const newHtml = convertPokemonToLi();
// alert(newHtml)
//pokemonList.innerHTML = newHtml;
// loadPokemonItens();