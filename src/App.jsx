import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { headerMenu, footerMenu } from "../data/menuData";

const App = () => {
  return (
    <>
      <Header menu={headerMenu} />
      <Main />
      <Footer menu={footerMenu} />
    </>
  )

}

export default App