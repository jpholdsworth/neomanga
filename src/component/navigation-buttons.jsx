import { Link } from "react-router-dom";

export default function NavigationButtons() {
    return (
        <div className="text-links">
            <Link to="" className="link">Home</Link>
            <Link to="best-sellers" className="link">Our Bestsellers</Link>
            <Link to="new-arrivals" className="link">New Arrivals</Link>
            <Link to="shop-all" className="link">Shop All</Link>
        </div>
    );
}