import Navigation from "./navigation";
import "../styles/header-section.css";

export default function HeaderSection() {
    return (
        <div className="header-section">
            <Navigation />
            <div className="shipping-offer">
                <p>
                   Free shipping for all order over £30 and just a reminder, all our deliveries are carbon neutral 
                </p>
            </div>
            <div className="text-links">
                <p>Our Bestsellers</p>
                <p>New Releases</p>
                <p>Shop All</p>
            </div>
        </div>
    );
}