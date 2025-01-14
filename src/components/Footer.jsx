const Footer = (props) => {
  const { menus } = props
  return (
    <footer>
      <section id="navigation">
        <div className="container h-100 w-100">
          <nav>
            <ul className="d-flex m-0 justify-content-between p-5">
              <li>
                <img src="/img/buy-comics-digital-comics.png" alt="digital-comics" />
                <a href="#">Digital Comics</a></li>
              <li>
                <img src="/img/buy-comics-merchandise.png" alt="merchandise" />
                <a href="#">DC Merchandise</a></li>
              <li>
                <img src="/img/buy-comics-subscriptions.png" alt="shop-locator" />
                <a href="#">Subscription</a></li>
              <li>
                <img src="/img/buy-comics-shop-locator.png" alt="subscriptions" />
                <a href="#">Comic Shop Locator</a></li>
              <li>
                <img src="/img/buy-dc-power-visa.svg" alt="power-visa" />
                <a href="#">DC Power Visa</a></li>
            </ul>
          </nav>
        </div>
      </section>
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
                <li key={`af-${item.id}`}>
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
              <li><a href="#"><img src="/img/footer-facebook.png" alt="Facebook" /></a></li>
              <li><a href="#"><img src="/img/footer-twitter.png" alt="Twitter" /></a></li>
              <li><a href="#"><img src="/img/footer-youtube.png" alt="Youtube" /></a></li>
              <li><a href="#"><img src="/img/footer-pinterest.png" alt="Pinterest" /></a></li>
              <li><a href="#"><img src="/img/footer-periscope.png" alt="Periscope" /></a></li>
            </ul>
          </nav>
        </div>
      </section>
    </footer>
  )
}

export default Footer