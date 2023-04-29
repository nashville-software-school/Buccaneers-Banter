import { useState, useEffect } from 'react'

const WantedPoster = ({ currentPirate }) => {
  const [pirate, setPirate] = useState({})

  async function fetchPirateProfile() {
    const response = await fetch(`http://localhost:8088/pirates/${currentPirate.id}`)
    const data = await response.json()
    setPirate(data)
  }

  useEffect(() => {
    if (currentPirate.id > 0) {
      fetchPirateProfile()
    }
  }, [currentPirate])

  if (!pirate) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{pirate?.name}'s Profile</h2>
      <img src={pirate?.image_url} alt={pirate?.name} />
      <p>Age: {pirate?.age}</p>
      <p>Nationality: {pirate?.nationality}</p>
      <p>Rank: {pirate?.rank}</p>
      <p>Ship: {pirate?.ship}</p>
    </div>
  )
}

export default WantedPoster
