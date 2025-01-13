const Header = () => {
  return (
    <header className="p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <figure className="m-0">
          <img src="/img/dc-logo.png" alt="dc-logo" />
        </figure>
        <nav>
          <ul className="d-flex m-0">
            <li><a href="#">Characters</a></li>
            <li><a href="#">Comics</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Tv</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Collectibles</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">Fans</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </nav>
      </div>

    </header>
  )
}

export default Header