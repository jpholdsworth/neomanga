import { Link } from "react-router-dom";
import "../styles/header-section.css";
import "../styles/navigation.css";

function Navigation({ quantityCounter }) {
    const { cartLength, wishlistLength } = quantityCounter;

    return (
        <div className="nav-bar">
            <div>
                <h1 className="logo-title">NeoMANGA//</h1>
                <h1 className="logo-title">NeoMANGA//</h1>
            </div>
            <div className="search-bar">
                <input 
                  type="text"
                  onChange={undefined}
                  placeholder="Search Product..."
                />
                <i className="fa-solid fa-magnifying-glass" />
            </div>
            <div className="icons-buttons">
                <Link to="/account-login" className="icon-link"><i className="fa-solid fa-user" /></Link>
                <Link to="/wishlist" className="icon-link" onClick={() => document.title = "NeoManga// Wishlist"}><i className="fa-solid fa-heart" /></Link>
                {wishlistLength != 0 && <p className="wishlist-item-amount">{wishlistLength}</p>}
                <Link to="/cart" className="icon-link" onClick={() => document.title = "NeoManga// Shopping Cart"}><i className="fa-solid fa-cart-shopping" /></Link>
                {cartLength != 0 && <p className="cart-item-amount">{cartLength}</p>}
            </div>
        </div>
    );
}


function NavigationButtons() {
    return (
        <div className="text-links">
            <Link to="/" className="link" onClick={() => document.title = "NeoManga// Home"}>Home</Link>
            <Link to="/best-sellers" className="link" onClick={() => document.title = "NeoManga// Best Sellers"}>Our Bestsellers</Link>
            <Link to="/new-arrivals" className="link" onClick={() => document.title = "NeoManga// New Arrivals"}>New Arrivals</Link>
            <Link to="/shop-all" className="link" onClick={() => document.title = "NeoManga// Shop All"}>Shop All</Link>
        </div>
    );
}

export default function HeaderSection({ quantityCounter }) {
    return (
        <div className="header-section">
            <Navigation quantityCounter={quantityCounter} />
            <div className="shipping-offer">
                <p>
                   Free shipping for all order over £25 and just a reminder, all our deliveries are carbon neutral 
                </p>
            </div>
            <NavigationButtons />
            <hr />
        </div>
    );
}