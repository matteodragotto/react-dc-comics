const ComicCard = (props) => {
  const { thumb, title } = props.cardData
  return (
    <div className="card">
      <div className="image">
        <img src={thumb} alt={title} />
      </div>
      <h4>{title}</h4>
    </div>
  )
}

export default ComicCard