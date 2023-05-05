import styles from "./story.module.css"

const StoryFooter = ({ story }) => {
    return (
        <div className={styles.story__footer}>
            Written by: {story.pirate.name}
            {/*
                We need to make this button click add a new object to the followers resource in the API.
                How can we do that when the state is stored in the great-grandparent component?
            */}
            <button className="bg-cyan-500 hover:bg-cyan-700 py-0 px-2 rounded">Follow</button>
        </div>
    )
}

export default StoryFooter
