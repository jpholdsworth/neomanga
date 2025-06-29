import { Link } from "react-router-dom";
import "../styles/header-section.css";
import "../styles/navigation.css";

function Navigation({ cartQuantity }) {
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
                <Link className="icon-link"><i className="fa-solid fa-user" /></Link>
                <Link className="icon-link"><i className="fa-solid fa-heart" /></Link>
                <Link to="/cart" className="icon-link"><i className="fa-solid fa-cart-shopping" /></Link>
                {cartQuantity != 0 && <p className="item-amount">{cartQuantity}</p>}
            </div>
        </div>
    );
}


function NavigationButtons() {
    return (
        <div className="text-links">
            <Link to="/" className="link">Home</Link>
            <Link to="/best-sellers" className="link">Our Bestsellers</Link>
            <Link to="/new-arrivals" className="link">New Arrivals</Link>
            <Link to="/shop-all" className="link">Shop All</Link>
        </div>
    );
}

export default function HeaderSection({ cartQuantity }) {
    return (
        <div className="header-section">
            <Navigation cartQuantity={cartQuantity} />
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