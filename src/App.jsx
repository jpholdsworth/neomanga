import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MangaData from '../manga-data';
import HeaderSection from './component/header-section';
import FooterSection from './component/footer-section';
import './App.css';

function App() {
  const [originalMangaData] = useState(() => MangaData.slice());
  const [mangaData, setMangaData] = useState(MangaData);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  // const [searchItem, setSearchItem] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const location = useLocation();
  useEffect(() => {
    setMangaData(originalMangaData);
    setSelectedCategory('');
  }, [originalMangaData, location.pathname]);

  function addItem(item, array="cart") {
    array !== "cart" ? setWishlist([...wishlist, item]) : setCart([...cart, item]);
  }

  function removeItem(productId, array="cart") {
    array !== "cart" ? setWishlist(wishlist.filter(item => item.id !== productId)) : setCart(cart.filter(item => item.id !== productId));
  }

  function resetCart() {
    setCart([]);
  }

  function sortCategory(category) {
    setSelectedCategory(category);
  
    let sortedData = [...originalMangaData];
    if (category.includes("price")) {
      sortedData.sort((a, b) => category === "price-low" ? a.price - b.price : b.price - a.price);
    } else if (category.includes("alphabet")) {
      sortedData.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (category === "alphabet-z") return titleB.localeCompare(titleA);
        return titleA.localeCompare(titleB);
      });
    }
    
    setMangaData(sortedData);
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
        <Outlet context={{ mangaData, setMangaData, wishlist, cart, selectedCategory, sortCategory, addItem, removeItem, resetCart, handleItem }} />
      <FooterSection />
    </>
  );
}

export default App;
