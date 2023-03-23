// PokemonList wrapped inside of an IIFE:

let pokemonRepository = (function () {
    let pokemonList = []
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

    function getAll() {
        return pokemonList
    }

    // Add pokemon to the list with conditional
    function add(pokemon) {
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon &&
            'detailsUrl' in pokemon
        ) {
            pokemonList.push(pokemon)
        } else {
            console.log('Not valid!')
        }
    }

    // Create list items for each pockemon
    function addListItem(pokemon) {
        let pokeList = document.querySelector('.pokemon-list')
        let listPokemon = document.createElement('li')
        listPokemon.classList.add('list-group-item')
        listPokemon.classList.add('col-xl-4')
        listPokemon.classList.add('col-lg-4')
        listPokemon.classList.add('col-md-6')

        // Create button for each pokemon
        let button = document.createElement('button')
        button.innerText = pokemon.name
        button.classList.add('pokemon-button-list')
        button.classList.add('btn')
        button.classList.add('btn-primary')
        button.classList.add('btn-lg')
        button.setAttribute('data-toggle', 'modal')
        button.setAttribute('data-target', '#pokemonModal')

        listPokemon.appendChild(button)
        pokeList.appendChild(listPokemon)

        button.addEventListener('click', function () {
            showDetails(pokemon)
        })
    }

    // Gets data and returns specific pokémon details
    function loadDetails(item) {
        let url = item.detailsUrl
        return fetch(url)
            .then(function (response) {
                return response.json()
            })
            .then(function (details) {
                item.imageUrl = details.sprites.other.dream_world.front_default
                item.height = details.height
                item.weight = details.weight
                item.types = details.types
            })
            .catch(function (e) {
                console.error(e)
            })
    }

    // Show details in modal
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon)
        })
    }

    // Modal
    function showModal(pokemon) {
        let modalBody = $('.modal-body')
        let modalTitle = $('.modal-title')
        let modalFooter = $('.modal-footer')
        modalTitle.empty()
        modalBody.empty()
        modalFooter.empty()
        let pokemonName = $('<h1>' + pokemon.name + '</h1>')
        let pokemonImage = $('<img class="modal-img">')
        pokemonImage.attr('src', pokemon.imageUrl)
        let pokemonHeight = $(
            '<p>' + 'Height : ' + pokemon.height / 10 + ' m' + '</p>'
        )
        let pokemonWeight = $(
            '<p>' + 'Weight : ' + pokemon.weight / 10 + ' kg' + '</p>'
        )

        modalTitle.append(pokemonName)
        modalBody.append(pokemonImage)
        modalFooter.append(pokemonHeight)
        modalFooter.append(pokemonWeight)
    }

    // Fetch pokemon list from API
    function loadList() {
        return fetch(apiUrl)
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                json.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url,
                    }
                    add(pokemon)
                })
            })
            .catch(function (e) {
                console.error(e)
            })
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails,
        showModal: showModal,
    }
})()

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon)
    })
})
