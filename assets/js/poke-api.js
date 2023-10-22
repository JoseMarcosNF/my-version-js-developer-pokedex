
const pokeApi = {}// Cria o objeto pokeApi

var actualPage = 1;
var pokemonId = 0;
//var detailsClick = (pokemonDetail) => {return pokemonDetail};
//var pokemonDetails = detailsClick;

function convertPokeApiDetailToPokemon(pokeDetail) {//Converte o modelo da pokedex oficial para a classe Pokemon
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
}

pokeApi.getPokemonDetail = (pokemon) => {//Função que pega uma nova lista de requisições dos detalhes dos pokemons
    return fetch(pokemon.url)//Requisita uma nova response baseada na url informada
        .then((response) => response.json())//Converte a response para Json
        .then(convertPokeApiDetailToPokemon)//converte a Json de response para o modelo da nossa classe criada (Pokemon)
        
}

    pokeApi.getPokemons = (offset, limit) => {
        
        //Cria variável com a url de acesso com offset(valor inicial) e número limite de pokemons
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

        return fetch(url)//por padrão o fetch usa o método GET e recebe um conteudo em objeto
            .then((response) => response.json())//Converte a response para Json
            .then((jsonBody) => jsonBody.results)//Pega a lista de Pokemons da response convertida(jsonBody.results)
            .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))//Coloca a nova response e transforma em uma
             //nova lista(map) através da função pokeApi.getPokemonDetail
            .then((detailRequests) => Promise.all(detailRequests))// Espera gerar a lista inteira de promises(Promise.all)
            .then((pokemonsDetails) => pokemonsDetails)
            console.log(jsonBody)
    }
