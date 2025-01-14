import Navigation from "./partial/Navigation"
import { buyComicsMenu } from "../../data/menuData"

const Footer = (props) => {
  const { menus } = props
  return (
    <footer>
      <Navigation menu={buyComicsMenu} />
      <section id="footer-top">
        <div className="container d-flex h-100 p-4">
          <nav className="d-flex flex-column">
            <ul>
              <h5>DC COMICS</h5>
              {menus.dcComicsMenu.map(item => (
                <li key={`ab-${item.id}`}>
                  <a href={item.url}>{item.text}</a>
                </li>
              ))}
            </ul>
            <ul>
              <h5>SHOP</h5>
              {menus.shopMenu.map(item => (
                <li key={`ac-${item.id}`}>
                  <a href={item.url}>{item.text}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="d-flex">
            <ul>
              <h5>DC</h5>
              {menus.dcMenu.map(item => (
                <li key={`ad-${item.id}`}>
                  <a href={item.url}>{item.text}</a>
                </li>
              ))}
            </ul>
            <ul>
              <h5>SITES</h5>
              {menus.sitesMenu.map(item => (
                <li key={`ae-${item.id}`}>
                  <a href={item.url}>{item.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="logo">
          <img src="/img/dc-logo-bg.png" alt="logo" />
        </div>
      </section>
      <section id="footer-bottom">
        <div className="container d-flex justify-content-between">
          <a class="submit-button" href="#" role="button">SIGN-UP NOW!</a>

          <nav>
            <ul className="d-flex align-items-center">
              <li><a href="#" className="fs-5 fw-bolder">FOLLOW US</a></li>
              {menus.socialMediaMenu.map(item => (
                <li key={`af-${item.id}`}>
                  <a href={item.url}><img src={item.img} alt={item.alt} /></a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </footer>
  )
}

export default Footer