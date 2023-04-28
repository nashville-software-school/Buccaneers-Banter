import { Inter } from 'next/font/google'
import StoryList from '../../components/postlist'
import ShipMates from '../../components/shipmates'
import WantedPoster from '../../components/wantedposter'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [currentPirate, setCurrentPirate] = useState({id: 0})
  const [myFavoriteScallywags, setScallyWags] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8088/pirates/1`)
        .then(response => response.json())
        .then((res) => {
            setCurrentPirate(res)
        })

    fetch(`http://localhost:8088/followers?followerId=1`)
        .then(response => response.json())
        .then((res) => {
          setScallyWags(res)
        })
  }, [])

  return (
    <main className='captainsLog'>
      <h1>Pirate Profile Page</h1>
      <WantedPoster currentPirate={currentPirate} />
      <StoryList  currentPirate={currentPirate} />

      <ShipMates myFavoriteScallywags={myFavoriteScallywags}  currentPirate={currentPirate} />
    </main>
  )
}
