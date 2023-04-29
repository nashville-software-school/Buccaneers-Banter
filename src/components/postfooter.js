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
        <div>
            Written by: {story.pirate.name}
            <button onClick={handleFollowClick}>Follow</button>
        </div>
    )
}

export default StoryFooter
