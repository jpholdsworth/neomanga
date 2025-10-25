import { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import "../styles/manga-carousel.css";

export default function MangaCarousel({ data }) {
    const { cart, wishlist, handleItem } = useOutletContext();
    const [index, setIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(4);
    const [cardWidth, setCardWidth] = useState(16.5);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setVisibleCards(1);
                setCardWidth(16.75);
            } else {
                setVisibleCards(4);
                setCardWidth(16.5);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                                  onClick={(event) => handleItem(event, manga) }
                                >
                                    { cart.includes(manga) ? "ADDED TO CART" : <><i className="fa-solid fa-cart-plus"></i> ADD TO CART</> }
                                </button>
                                <div
                                    onClick={(event) => handleItem(event, manga, "wishlist") }
                                >
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