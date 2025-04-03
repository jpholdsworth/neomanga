import Navigation from "./navigation";
import NavigationButtons from "./navigation-buttons";
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
            <NavigationButtons />
            <hr />
        </div>
    );
}