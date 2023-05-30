import React from 'react'

import {useRouter} from 'next/router'

export default function PokemonPage({details}) {
  const router = useRouter()
  return (
    <div>
      <h1 className='txt-3xl front-semibold'>Pokemon - {details.name} </h1>
      
      <div className='flex flex-col space-y-4'>
        <p>Height: {details.stats.height_m}</p>
        <p>Weight: {details.stats.weight_kg}</p>
        <p>Attack: {details.stats.attack}</p>
      </div>
    </div>

  )
}

export async function getServerSideProps(context){
      // console.log("context", context.params)
const  pokemonName = context.params.pokenmonname
const response = await fetch(`http://127.0.0.1:8000/pokemon/${pokemonName}`)
const data = await response.json()

console.log(data)


  return {
    props: {
      details: data
    }

  }
}