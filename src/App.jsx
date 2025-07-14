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

  function addItem(item, array="cart") {
    array !== "cart" ? setWishlist([...wishlist, item]) : setCart([...cart, item]);
  }

  function removeItem(productId, array="cart") {
    array !== "cart" ? setWishlist(wishlist.filter(item => item.id !== productId)) : setCart(cart.filter(item => item.id !== productId));
  }

  function resetCart() {
    setCart([]);
  }

  const handleItem = (event, manga, whereTo="cart") => {
      event.preventDefault();
      event.stopPropagation();
      if (whereTo !== "cart") {
          !wishlist.includes(manga) ? addItem(manga, "wishlist") : removeItem(manga.id, "wishlist");
      } else {
          addItem(manga);
      }
  }

  const quantityCounter = {
    cartLength: cart.length,
    wishlistLength: wishlist.length,
  };

  return (
    <>
      <HeaderSection quantityCounter={quantityCounter} />
        <Outlet context={{ mangaData, setMangaData, wishlist, cart, addItem, removeItem, resetCart, handleItem }} />
      <FooterSection />
    </>
  );
}

export default App;
