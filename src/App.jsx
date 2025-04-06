// import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import MangaData from '../manga-data';
import HeaderSection from './component/header-section';
import FooterSection from './component/footer-section';

function App() {
  // const [wishlist, setWishlist] = useState([]);
  // const [shoppingCart, setShoppingCart] = useState([]);
  // const [searchItem, setSearchItem] = useState('');

  // ADD WISHLIST ITEM and REMOVE WISHLIST ITEM
  // ADD ITEM to the Cart and REMOVE ITEM from the cart

  return (
    // HEADER with search and shopping cart
      // About
      // Upcoming EVENTS / Blogs
      // NEW ARRIVALS / Coming soon ?
    // MAIN SECTION
      // Grid layout of manga
      // filter side
    // FOOTER 
    <>
      <HeaderSection />
        <Outlet context={[MangaData]} />
      <FooterSection />
    </>
  );
}

export default App;
