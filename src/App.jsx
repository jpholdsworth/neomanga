import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MangaData from '../manga-data';
import HeaderSection from './component/header-section';
import FooterSection from './component/footer-section';
import './App.css';

function App() {
  const [originalMangaData] = useState(() => MangaData.slice());
  const [mangaData, setMangaData] = useState(MangaData);
  const [selectedType, setSelectedType] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  // const [searchItem, setSearchItem] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filterQuery, setFilterQuery] = useState({ genres: [], minPrice: 0, maxPrice: 60 });

  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("best-sellers")) setSelectedType("best-selling");
    else if (location.pathname.includes("new-arrivals")) setSelectedType("new-arrivals");
    else setSelectedType('');
  }, [location.pathname]);

  useEffect(() => {
    let filteredData = [...originalMangaData];

    if (selectedType === "best-selling") { filteredData = filteredData.filter(manga => manga.additionalInfo.bestSeller); }
    else if (selectedType === "new-arrivals") { filteredData = filteredData.filter(manga => manga.additionalInfo.newRelease) }

    if (filterQuery.genres.length > 0) {
      filteredData = filteredData.filter(manga => manga.genres.some(g => filterQuery.genres.includes(g)));
    }

    if (selectedCategory.includes("price")) {
      filteredData.sort((a, b) => selectedCategory === "price-low" ? a.price - b.price : b.price - a.price);
    } else if (selectedCategory.includes("alphabet")) {
      filteredData.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (selectedCategory === "alphabet-z") return titleB.localeCompare(titleA);
        return titleA.localeCompare(titleB);
      });
    }

    setMangaData(filteredData);
  }, [originalMangaData, selectedType, filterQuery, selectedCategory]);

  function addItem(item, array="cart") {
    array !== "cart" ? setWishlist([...wishlist, item]) : setCart([...cart, item]);
  }

  function removeItem(productId, array="cart") {
    array !== "cart" ? setWishlist(wishlist.filter(item => item.id !== productId)) : setCart(cart.filter(item => item.id !== productId));
  }

  const resetCart = () => setCart([]);

  const sortCategory = (category) => setSelectedCategory(category);

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

  // TODO: HANDLE CHANGE OF GENRES AND PRICE RANGE to sort the data and set new state for mangaData
  const handleGenre = (event, newGenre) => {
    setFilterQuery({ 
      ...filterQuery, 
      genres: event.target.checked ? [...filterQuery.genres, newGenre] : filterQuery.genres.filter(g => g !== newGenre) 
    });
  }

  return (
    <>
      <HeaderSection quantityCounter={quantityCounter} />
      {/* Add state of filter query and functions in contect attribute */}
        <Outlet context={{ 
          mangaData, 
          setMangaData, 
          wishlist, 
          cart, 
          selectedCategory, 
          sortCategory, 
          addItem, 
          removeItem, 
          resetCart, 
          handleItem,
          filterQuery,
          handleGenre
        }} />
      <FooterSection />
    </>
  );
}

export default App;
