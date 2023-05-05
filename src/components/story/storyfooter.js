import styles from "./story.module.css"

const StoryFooter = ({ story, currentPirate }) => {

    const handleFollowClick = async () => {
        // Make an API call to add the follower here
        const response = await fetch('http://localhost:8088/followers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pirateId: story.pirate.id,
                followerId: currentPirate.id
            })
        })

        if (!response.ok) {
            throw new Error('Failed to add follower')
        }

    }

    return (
        <div className={styles.story__footer}>
            Written by: {story.pirate.name}
            <button className="bg-cyan-500 hover:bg-cyan-700 py-0 px-2 rounded" onClick={handleFollowClick}>Follow</button>
        </div>
    )
}

export default StoryFooter
