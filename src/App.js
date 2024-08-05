import './App.css';
import Blog from './components/Blog';
import Customers from './components/Customers';
import Hero from './components/Hero';
import Whatwedo from "./components/Whatwedo"
import Choose from "./components/Choose"
import Interested from './components/Interested';
import Works from './components/Works';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Hero />
      <Whatwedo />
      <Choose />
      <Customers/>
      <Works/>
      <Interested/>
      <Blog/>
      
      
    </>
  );
}

export default App;
