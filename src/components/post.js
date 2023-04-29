import StoryContent from "./postcontent"
import StoryFooter from "./postfooter"

const Story = ({ story, currentPirate }) => (
    <li key={story.id}>
        <h3>{story.title}</h3>
        <StoryContent content={story.content} />
        <StoryFooter  currentPirate={currentPirate} story={story} />
        <p>By {story.pirate.name}</p>
    </li>
)

export default Story
