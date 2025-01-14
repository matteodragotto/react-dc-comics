const Navigation = () => {

  return (
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
  )
}

export default Navigation