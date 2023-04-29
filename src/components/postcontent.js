const StoryContent = ({ content }) => (
    <div>{content.split('\n').map((line, i) => <p key={i}>{line}</p>)}</div>
)
export default StoryContent