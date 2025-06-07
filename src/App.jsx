import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MangaData from '../manga-data';
import HeaderSection from './component/header-section';
import FooterSection from './component/footer-section';
import './App.css';

function App() {
  const [mangaData, setMangaData] = useState(MangaData);
  // const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  // const [searchItem, setSearchItem] = useState('');

  // ADD WISHLIST ITEM and REMOVE WISHLIST ITEM

  function addItemToCart(item) {
    setCart([...cart, item]);
  }

  function removeFromCart(productId) {
    setCart(cart.filter(item => item.id !== productId))
  }

  return (
    <>
      <HeaderSection />
        <Outlet context={{ mangaData, setMangaData, cart, addItemToCart, removeFromCart }} />
      <FooterSection />
    </>
  );
}

export default App;
