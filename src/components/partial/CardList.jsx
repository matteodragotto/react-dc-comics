import comics from "../../../data/comics"
import ComicCard from "./ComicCard"

const cardList = (props) => {
  return (
    <div className="container row">

      {comics.map(comic => (
        <div className="col-2">
          <ComicCard key={comic.id} cardData={comic} />
        </div>
      ))}



    </div>

  )
}

export default cardList