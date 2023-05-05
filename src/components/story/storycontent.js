import styles from "./story.module.css"

const StoryContent = ({ content }) => (
    <div className={styles.story__content}>{content.split('\n').map((line, i) => <p key={i}>{line}</p>)}</div>
)
export default StoryContent