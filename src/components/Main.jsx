import CardList from "./partial/cardList"

const Main = (props) => {

  return (
    <main>
      <section id="jumbotron">
        <div className="label">
          <p>Current Series</p>
        </div>
      </section>
      <section id="content" className="d-flex align-items-center">
        <CardList />
      </section>
      <div className="container btn-load">
        <button className="load">LOAD MORE</button>
      </div>

    </main >
  )
}

export default Main