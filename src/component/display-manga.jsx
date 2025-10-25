import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useOutletContext } from "react-router-dom";
import "../styles/display-manga.css";
import "../styles/genres.css";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}

function MangaGrid({ currentProducts, index }) {
    const { cart, wishlist, handleItem } = useOutletContext();

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
                                <button 
                                  className="add-cart-btn"
                                  disabled={cart.includes(obj)}
                                  onClick={(event) => handleItem(event, obj)}
                                >
                                    { cart.includes(obj) ? "ADDED TO CART" : <><i className="fa-solid fa-cart-plus"></i> ADD TO CART</> }
                                </button>
                                <div
                                    onClick={(event) => handleItem(event, obj, "wishlist")}
                                >
                                    { wishlist.includes(obj) ? <i className="wishlist fa-solid fa-heart"></i> : <i className="wishlist fa-regular fa-heart"></i> }
                                </div>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

function Pagination({ index, pageCount, handleSetIndex }) {
    const width = useWindowWidth();

    const getPageNumbers = () => {
        const pages = [];
        const totalPages = pageCount;
        const current = index + 1;

        if (totalPages <= 9 || width >= 1024) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);
            if (current > 3) pages.push('start-ellipsis');
        
            const start = Math.max(2, current - 1);
            const end = Math.min(totalPages - 1, current + 1);
        
            for (let i = start; i <= end; i++) pages.push(i);
            if (current < totalPages - 2) pages.push('end-ellipsis');
        
            pages.push(totalPages); 
        }

        return pages;
    }
  
    const pages = getPageNumbers();
  
    return (
        <div className="index-nav">
            <button disabled={index === 0} onClick={() => handleSetIndex(index - 1)}>&#8882;</button>
            {pages.map((p, i) => (
                p === 'start-ellipsis' || p === 'end-ellipsis' ? (
                    <span key={i} className="ellipsis">…</span>
                ) : (
                    <div
                      key={i}
                      className={'idx-btn' + (index === p - 1 ? ' active' : '')}
                      onClick={() => handleSetIndex(p - 1)}
                    >
                        {p}
                    </div>
                )
            ))}
            <button disabled={index === pageCount - 1} onClick={() => handleSetIndex(index + 1)}>&#8883;</button>
        </div>
    );
};

export default function DisplayManga({ products, panelCount }) {
    const query = useQuery();
    const location = useLocation();
    const navigate = useNavigate();

    const initialIndex = parseInt(query.get("page")) || 0;
    const [index, setIndex] = useState(initialIndex);
    
    const currentProducts = products.slice(index * panelCount, (index + 1) * panelCount);
    const pageCount = Math.ceil(products.length / panelCount);

    useEffect(() => {
        if (location.pathname !== "/shop-all") {
            setIndex(0);
        }
    }, [location.pathname]);

    useEffect(() => {
        if (index > pageCount - 1) {
            setIndex(pageCount - 1);
        }
    }, [pageCount, index]);

    function handleSetIndex(newIndex) {
        setIndex(newIndex);

        if (location.pathname === "/shop-all") navigate(`${location.pathname}?page=${newIndex}`, { replace: true });

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

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