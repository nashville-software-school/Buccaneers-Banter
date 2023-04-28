import { useState, useEffect } from 'react'

const ShipMates = ({ myFavoriteScallywags }) => {
  return (
    <div>
      <h2>Following Pirates</h2>
      <ul>
        {myFavoriteScallywags.map((relationship) => (
          <li key={relationship.id}>
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
