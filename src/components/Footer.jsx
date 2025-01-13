const Footer = () => {
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
              <h5>DC Comics</h5>
              <li><a href="#">Characters</a></li>
              <li><a href="#">Comics</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">Tv</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">News</a></li>
            </ul>
            <ul>
              <h5>SHOP</h5>
              <li><a href="#">Shop DC</a></li>
              <li><a href="#">Shop DC Collectibles</a></li>
            </ul>
          </nav>
          <nav className="d-flex">
            <ul>
              <h5>DC</h5>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Ad Choices</a></li>
              <li><a href="#">Advertising</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Subscriptions</a></li>
              <li><a href="#">Talent Workshops</a></li>
              <li><a href="#">CPSC Certificates</a></li>
              <li><a href="#">Ratings</a></li>
              <li><a href="#">Shop Help</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
              <h5>SITES</h5>
              <li><a href="#">DC</a></li>
              <li><a href="#">MAD Magazine</a></li>
              <li><a href="#">DC Kids</a></li>
              <li><a href="#">DC Universe</a></li>
              <li><a href="#">DC Power Visa</a></li>
            </ul>
          </nav>
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