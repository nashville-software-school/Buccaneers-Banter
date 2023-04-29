import { useState, useEffect } from 'react'

const ShipMates = ({ myFavoriteScallywags }) => {
  return (
    <div className='log__favorites'>
      <h2 className='text-xl'>Following Pirates</h2>
      <ul>
        {myFavoriteScallywags.map((relationship) => (
          <li className='text-base' key={relationship.id}>
            <p>Name: {relationship?.pirate?.name}</p>
            <p>Rank: {relationship?.pirate?.rank}</p>
            <p>Ship Name: {relationship?.pirate?.shipName}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShipMates
