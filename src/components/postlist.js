import { useState, useEffect } from 'react'
import Story from './post'

const StoryList = ({currentPirate}) => {
    const [stories, setStories] = useState([])

    const fetchStories = async () => {
        const res = await fetch('http://localhost:8088/stories?_expand=pirate')
        const data = await res.json()
        setStories(data)
    }

    useEffect(() => {
        fetchStories()
    }, [])

    return (
        <div>
            <h2>Pirate Stories</h2>
            <ul>
                {stories.map((story) => <Story  currentPirate={currentPirate} key={`story--${story.id}`} story={story} />)}
            </ul>
        </div>
    )
}

export default StoryList
