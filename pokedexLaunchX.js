const pokeType = document.getElementById("pokeTipo");
const pokemonId = document.getElementById('pokeId');
const pokemonPeso = document.getElementById('pokePeso');
const pokemonNombre = document.getElementById('pokemonName');

const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url =`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        //console.log(res);
        if (res.status != "200") {
            console.log(res);
            pokeImage("img/interrogacion.png");
            pokeType.innerHTML=`?????`;
            pokemonId.innerHTML = `?????`;
            pokemonPeso.innerHTML = `?????`;
            pokemonNombre.innerHTML = `No encontrado`;
        }
        else {
            return res.json();
        }
        
    }) .then((data) =>{
        console.log(data);
        let pokeImg = data.sprites.other.dream_world.front_default;
        console.log(pokeImg); 
        pokeImage(pokeImg);
        pokeType.innerHTML=`Tipo: ${data.types[0].type.name}`;
        pokemonId.innerHTML = `Id: #${data.id}`;
        pokemonPeso.innerHTML = `Peso: ${data.weight / 10}kg`;
        pokemonNombre.innerHTML = `${data.forms[0].name}`;
    })   
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url
}


const tipo = (url) => {
    document.getElementById('<%=Label1.poketipo %>').innerHTML= '${url}';
}




//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")


//fetchPokemon();

const imprimir = () => {
    const pokeName = document.getElementById("pokeName")
    let pokeInput = pokeName.value
    console.log("Hola "+ pokeInput);
}