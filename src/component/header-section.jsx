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
                <p className="link">Home</p>
                <p className="link">Our Bestsellers</p>
                <p className="link">New Releases</p>
                <p className="link">Shop All</p>
            </div>
            <hr />
        </div>
    );
}