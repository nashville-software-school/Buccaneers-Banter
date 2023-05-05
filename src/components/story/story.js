import StoryContent from "./storycontent"
import StoryFooter from "./storyfooter"
import styles from "./story.module.css"

const Story = ({ story, currentPirate }) => (
    <li key={story.id} className={styles.story}>
        <h3 className="text-xl">{story.title}</h3>
        <StoryContent content={story.content} />
        <StoryFooter currentPirate={currentPirate} story={story} />
    </li>
)

export default Story
