import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MangaData from '../manga-data';
import HeaderSection from './component/header-section';
import FooterSection from './component/footer-section';
import './App.css';

function App() {
  const [mangaData, setMangaData] = useState(MangaData);
  // const [wishlist, setWishlist] = useState([]);
  // const [shoppingCart, setShoppingCart] = useState([]);
  // const [searchItem, setSearchItem] = useState('');

  // ADD WISHLIST ITEM and REMOVE WISHLIST ITEM
  // ADD ITEM to the Cart and REMOVE ITEM from the cart

  return (
    <>
      <HeaderSection />
        <Outlet context={[mangaData, setMangaData]} />
      <FooterSection />
    </>
  );
}

export default App;
