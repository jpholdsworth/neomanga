import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import "../styles/manga-carousel.css";

// add function to add the item to the list - wishlist and cart - use event to stop Propagation and prevent default

export default function MangaCarousel({ data }) {
    const { cart, wishlist, addItem } = useOutletContext();
    const [index, setIndex] = useState(0);

    const visibleCards = 4;
    const cardWidth = 16.5;

    const handlePrevManga = () => {
        if (index > 0) setIndex(index - 1);
    }

    const handleNextManga = () => {
        if (index + visibleCards < data.length) setIndex(index + 1);
    }

    return (
        <div id="carousel">
            <button onClick={handlePrevManga} disabled={index === 0}>
                &#8918;
            </button>

            <div className="carousel-wrapper">
                <div
                    className="carousel-container"
                    style={{ transform: `translateX(-${(index * cardWidth)}%)` }}
                >
                    {data.map(manga => (
                        <Link 
                          className="manga-card product-link" 
                          to={`/product/${manga.id}`}
                          key={manga.id}
                        >
                            <img className="carousel-image" src={manga.image} alt="" />
                            <p className="manga-title">{manga.title}</p>
                            <p>Volume {manga.vol}</p>
                            <p className="manga-price">£{manga.price}</p>
                            <div className="carousel-btns">
                                <button 
                                  className="add-cart-btn"
                                  disabled={cart.includes(manga)}
                                  onClick={(event) => { event.preventDefault(); event.stopPropagation(); addItem(manga); }}
                                >
                                    { cart.includes(manga) ? "ADDED TO CART" : <><i className="fa-solid fa-cart-plus"></i> ADD TO CART</> }
                                </button>
                                <div>
                                    { wishlist.includes(manga) ? <i className="wishlist fa-solid fa-heart"></i> : <i className="wishlist fa-regular fa-heart"></i> }
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <button onClick={handleNextManga} disabled={index + visibleCards >= data.length}>
                &#8919;
            </button>
        </div>
    );
}