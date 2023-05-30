import React from 'react'
import Link from 'next/link'


const colorMap = {
    fire: "bg-red-500",
    water: "bg-blue-500",
    grass: "bg-green-500"
}

function PokemonListItem({pokemon}) {


    return(
       <Link href={`/pokemons/${pokemon.name}`}> <li className="border border-gray-400 p-5 flex items-center space-x-4">
            {/* dot */}
            <span className="text-gray-700 text-xl">{pokemon.name}</span>
            <div className={`w-5 h-5 rouded-full ${colorMap[pokemon.type1]}`}></div>
        </li>
        </Link>
        )
}


export default function PokemonList({pokemons}) {
  return (
    <ul>
        {pokemons.length > 0 ? 
                pokemons.map((pokemon, index)=> <PokemonListItem pokemon={pokemon} key={index} />)
            : <h1 className="text-3xl text-gray-600"> No pokemons in database </h1> 
        }
    </ul>
  )
}
