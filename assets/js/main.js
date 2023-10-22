
const pokemonList = document.getElementById('pokemonList')//Pega a ID da lista de pokemons(ol) 
const loadMoreButton = document.getElementById('loadMoreButton')
//let pokemonDetailButton = document.getElementById(`pokemonDetailButton${pokemon.number}`)

const maxRecords = 151
const limit = 10
let offset ;

//var numero;

/*function detailsClick (){

    let varPage = window.location.href;
    let linkVars = varPage.slice(str.indexOf('?') + 1);

    alert(linkVars);

}*/



//if (click==true){
/*document.addEventListener('click', ()=>{

    let varPage = window.location.href;
    let linkVars = varPage.slice(str.indexOf('?') + 1);

    alert(linkVars);
})*/
/*function getActualPage(actualPage){
    
    return alert('teste pagina atual '+actualPage);
}*/


    /*function convertPokemonToLi(pokemon) {
        return `
        <div class="voltar">
                <button id="voltarButton" type="button">
                    Back
                </button>
            </div>
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
    
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
    
                    <img src="${pokemon.photo}"
                         alt="${pokemon.name}">
                </div>
            </li>
            </a>
        `

    }*/


/*    location.reload();
}

}else{*/



//})
        
    function convertPokemonToLi(pokemon) { 
        
        return `
        <a id="${pokemon.number}" href="pokemonDetails.html?${pokemon.number}?2">
            <li class="pokemon ${pokemon.type}" >
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        <!--cria as <li>s dos types-->
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
            </a>
        `
    }

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')//transforma a lista de pokemons e converte
        //para uma lista de <li>(map(convertPokemonToLi)) e junta essa lista sem separador (join(''))
        //o pokemons.map serve como um for já que pokemons = [] transformou em uma array
        pokemonList.innerHTML += newHtml//insere dentro de <lo>(pokemonList) toda a lista de pokemons
        // concatenada (newHtml)
    })
}

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

/*if (actualPage == 2){

    alert("pagina 2");
    alert(pokemonId);*/

//}else{

    loadPokemonItens(offset, limit)

//}


/*}if (actualPage != 1){
    
}else{

    alert('TEste click');''
    convertPokemonToLi(pokemon);

}//Fim função que pega a página atual

//Fim if (actualPage == '1'){

    const pokemonDetailButton = document.querySelector("#my-btn");
    button.addEventListener("click",(e) =>{
        console.log(e.srcElement.id);
    })

    /*btn.addEventListener('click',() =>{
        alert(btn.id);
    })
    var el = document.getElementById('fora');
        el.addEventListener('click', () => {
        alert(e.target.id);
    });*/
