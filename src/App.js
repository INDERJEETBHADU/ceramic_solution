import './App.css';
import OurBlog from './components/OurBlog';
import Customers from './components/Customers';
import Hero from './components/Hero';
import Whatwedo from './components/Whatwedo';
import Choose from './components/Choose';
import Interested from './components/Interested';
import Works from './components/Works';
import BackToTop from './components/BackToTop ';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <>
      <Hero />
      <Whatwedo />
      <Choose />
      <Customers />
      <Works />
      <Interested />
      <OurBlog />
      <BackToTop />
    </>
  );
}

export default App;
