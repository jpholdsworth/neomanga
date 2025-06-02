import { Link } from "react-router-dom";
import "../styles/header-section.css";
import "../styles/navigation.css";

function Navigation() {
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
                <i className="fa-solid fa-user" />
                <i className="fa-solid fa-heart" />
                <i className="fa-solid fa-cart-shopping" />
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

export default function HeaderSection() {
    return (
        <div className="header-section">
            <Navigation />
            <div className="shipping-offer">
                <p>
                   Free shipping for all order over £30 and just a reminder, all our deliveries are carbon neutral 
                </p>
            </div>
            <NavigationButtons />
            <hr />
        </div>
    );
}