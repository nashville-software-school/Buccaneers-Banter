import StoryList from '../../components/postlist'
import ShipMates from '../../components/shipmates'
import WantedPoster from '../../components/wantedposter'
import { useEffect, useState } from 'react'

export default function Home() {
    const [currentPirate, setCurrentPirate] = useState({ id: 0 })
    const [myFavoriteScallywags, setScallyWags] = useState([])

    const getPirate = (id) => {
        fetch(`http://localhost:8088/pirates/${id}`)
            .then(response => response.json())
            .then((res) => {
                setCurrentPirate(res)
            })

    }

    const getFavoritePirates = (id) => {
        fetch(`http://localhost:8088/followers?followerId=${id}&_expand=pirate`)
            .then(response => response.json())
            .then((res) => {
                setScallyWags(res)
            })
    }

    useEffect(() => {
        const pirate_id = localStorage.getItem("pirateId") ?? 0
        if (pirate_id > 0) {
            getPirate(pirate_id)
            getFavoritePirates(pirate_id)
        }
    }, [])

    return (
        <main className='captainsLog'>
            <h1>Pirate Profile Page</h1>
            <WantedPoster currentPirate={currentPirate} />
            <StoryList currentPirate={currentPirate} />
            <ShipMates myFavoriteScallywags={myFavoriteScallywags} currentPirate={currentPirate} />
        </main>
    )
}
