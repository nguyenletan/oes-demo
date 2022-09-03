const DiscussionBoard = (props) => {
  const { discussions } = props

  return (<section className="discussion-board">
    <h4 className="title">DISCUSSION BOARDS ACTIVITY</h4>
    <ul className="discussions">
      {discussions.map(discussion => (
        <li className={discussion.numberOfNewMessages > 0 ? 'discussion has-new-message' : 'discussion'}
            key={discussion.discussionTitle} style={{ backgroundColor: discussion.backgroundColor }}>
          <p className="discussion-title">
            <svg className="circle-bullet" width="10" height="10" viewBox="0 0 10 10" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="5" fill={discussion.numberOfNewMessages > 0 ? discussion.color : 'transparent'}/>
            </svg>
            <a href={discussion.url} title={discussion.discussionTitle}>{discussion.discussionTitle}</a>
          </p>
          <p className="number-message">
            <span className="new-message"
                  style={{ backgroundColor: discussion.color + 'B2' }}>{discussion.numberOfNewMessages}</span>
            <span className="message">{discussion.numberOfMessages}</span>
          </p>
        </li>
      ))}
    </ul>
  </section>)
}

export default DiscussionBoard