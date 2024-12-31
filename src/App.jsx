import Banner from "./components/banner/Banner"
import Best from "./components/best/Best"
import Browse from "./components/browse/Browse"
import Header from "./components/header/Header"
import NavScroll from "./components/navbar/NavScroll"
import Sales from "./components/sales/Sales"



function App() {

  return (
    <>
      <Header/>
      <NavScroll/>
      <Banner/>
      <Sales/>
      <Browse/>
      <Best/>
    </>
  )
}

export default App
