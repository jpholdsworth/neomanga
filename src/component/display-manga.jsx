import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/display-manga.css";
import "../styles/genres.css";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function MangaGrid({ currentProducts, index }) {
    return (
        <div className="display-container">
            <div className="manga-grid">
                {currentProducts.map(obj => 
                    <div key={obj.id} className="product-container">
                        <Link className="product-link" to={`/product/${obj.id}?page=${index}`} >
                            <div className="manga-grid-item">
                                <img src={obj.image} alt="" />
                                <div className="item-details">
                                    <h4>{obj.title}</h4>
                                    <p>£{obj.price}</p>
                                    <div className="genres">
                                        {obj.genres.slice(1).map(genre => <p key={genre} className={`genre-tag ${genre.toLowerCase().split(" ").join("-")}`} >{genre}</p>)}
                                    </div>
                                    <p>{obj.vol !== null && `Volume ${obj.vol}`}</p>
                                    <p>By: {obj.author.name}</p>
                                </div>
                            </div>
                            <div className="item-btns">
                                <button className="add-cart-btn"><i className="fa-solid fa-cart-plus"></i> ADD TO CART</button>
                                { obj.additionalInfo.wishlist ? <i className="wishlist fa-solid fa-heart"></i> : <i className="wishlist fa-regular fa-heart"></i> }
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

function Pagination({ index, pageCount, handleSetIndex }) {
    return (
        <div className="index-nav">
            <button disabled={ index === 0 } onClick={() => handleSetIndex(index - 1)}>&#8882;</button>
            {[...Array(pageCount)].map((_, i) => <div key={i} className={'idx-btn' + (index === i ? ' active' : '')} onClick={() => handleSetIndex(i)}>{i + 1}</div>)}
            <button disabled={ index === pageCount - 1 } onClick={() => handleSetIndex(index + 1)}>&#8883;</button>
        </div>
    );
}

export default function DisplayManga({ products, panelCount }) {
    const query = useQuery();
    const location = useLocation();
    const navigate = useNavigate();

    const initialIndex = parseInt(query.get("page")) || 0;
    const [index, setIndex] = useState(initialIndex);

    useEffect(() => {
        if (location.pathname !== "/shop-all") {
            setIndex(0);
        }
    }, [location.pathname]);

    function handleSetIndex(newIndex) {
        setIndex(newIndex);

        if (location.pathname === "/shop-all") navigate(`${location.pathname}?page=${newIndex}`, { replace: true });

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const currentProducts = products.slice(index * panelCount, (index + 1) * panelCount);
    const pageCount = Math.ceil(products.length / panelCount);

    return (
        <div className="manga-grid-display">
            <MangaGrid 
                currentProducts={currentProducts}
                index={index}
            />
            <Pagination 
                index={index}
                pageCount={pageCount}
                handleSetIndex={handleSetIndex}
            />
        </div>
    );
}