import Header from "./Components/Header"
import SlickSlider from './Components/SlickSlider'
import Artists from './Components/Artists'
import Collections from './Components/Collections'
import Assets from './Components/Assets'
import Article from './Components/Article'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <SlickSlider />
      <Artists />
      <Collections />
      <Assets />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
