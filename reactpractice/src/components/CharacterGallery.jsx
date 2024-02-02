import React from 'react'
import characterData from '../data/characterData.json'
import Character from './Character'

function CharacterGallery() {
  console.log(characterData)
  return (
    <div>
      {characterData.map(
        (character) => <Character
        key={character._id}
        name={character.name}
        img={character.imgUrl}
        race={character.race}
        realm={character.realm} />
       )}
    </div>
  )
}

export default CharacterGallery;