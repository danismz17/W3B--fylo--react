import './App.css'
import { Header } from './Components/A-Header/Header';
import { Hero } from './Components/B-Hero/Hero';
import { Items } from './Components/C-Items/Items';
import { Info } from './Components/D-Info/Info';
import { Interactions } from './Components/E-Interacciones/Interacciones';
import { Footer } from './Components/F-Footer/Footer';



function App() {
  return (
    <>
      <div className="web-container">
          
        <div className='web-margin'>
          <Header></Header>
          <main>
            <Hero></Hero>
            <Items></Items>
            <Info></Info>
            <Interactions></Interactions>
            <Footer></Footer>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
