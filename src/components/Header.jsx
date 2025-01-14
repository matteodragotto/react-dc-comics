const Header = (props) => {

  const menuHeader = props.menu
  return (
    <header>
      <div className="container d-flex justify-content-between align-items-center">
        <figure className="m-0">
          <img src="/img/dc-logo.png" alt="dc-logo" />
        </figure>
        <nav>
          <ul className="d-flex m-0">
            {menuHeader.map(item => (
              <li key={item.id}>
                <a href={item.url} className={item.isActive ? 'active' : ''}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </header>
  )
}

export default Header