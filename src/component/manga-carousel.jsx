import { useState } from "react";
import "../styles/manga-carousel.css";

export default function MangaCarousel({ data }) {
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
                        <div className="manga-card" key={manga.id}>
                            <img className="carousel-image" src={manga.image} alt="" />
                            <p className="manga-title">{manga.title}</p>
                            <p>Volume {manga.vol}</p>
                            <p className="manga-price">£{manga.price}</p>
                            <div className="carousel-btns">
                                <button className="add-cart-btn"><i className="fa-solid fa-cart-plus"></i> ADD TO CART</button>
                                {manga.additionalInfo.wishlist ? 
                                    <i className="wishlist fa-solid fa-heart"></i> : 
                                    <i className="wishlist fa-regular fa-heart"></i>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={handleNextManga} disabled={index + visibleCards >= data.length}>
                &#8919;
            </button>
        </div>
    );
}