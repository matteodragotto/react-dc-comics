const Navigation = (props) => {
  const buyComicsMenu = props.menu

  return (
    <section id="navigation">
      <div className="container h-100 w-100">
        <nav>
          <ul className="d-flex m-0 justify-content-between p-5">
            {buyComicsMenu.map(item => (
              <li key={item.id}>
                <img src={item.img} alt={item.alt} />
                <a href={item.url}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Navigation