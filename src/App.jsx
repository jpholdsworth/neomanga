import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MangaData from '../manga-data';
import HeaderSection from './component/header-section';
import FooterSection from './component/footer-section';
import './App.css';

function App() {
  const [mangaData, setMangaData] = useState(MangaData);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  // const [searchItem, setSearchItem] = useState('');

  // ADD WISHLIST ITEM and REMOVE WISHLIST ITEM
  function addItem(item, array="cart") {
    array !== "cart" ? setWishlist([...wishlist, item]) : setCart([...cart, item]);
  }

  function removeFromCart(productId) {
    setCart(cart.filter(item => item.id !== productId))
  }

  function resetCart() {
    setCart([]);
  }

  return (
    <>
    {/* Quantity in the cart and wishlist */}
      <HeaderSection cartQuantity={cart.length} />
        <Outlet context={{ mangaData, setMangaData, wishlist, cart, addItem, removeFromCart, resetCart }} />
      <FooterSection />
    </>
  );
}

export default App;
