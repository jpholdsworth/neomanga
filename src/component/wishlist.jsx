import { useOutletContext, Link } from "react-router-dom";
import "../styles/shopping-cart.css";

export default function Wishlist() {
    const { wishlist } = useOutletContext();

    if (wishlist.length) {
         return (
            <div className="wishlist-container">
                <h1 className="wishlist-title">Your Wishlist</h1>
                <div className="items">
                    {wishlist.map(product => (
                        <div key={product.id} className="wishlist-item">
                            {product.title}
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className="wishlist-container">
                <div className="no-item">
                    <div className="glitch">
                        <span>[ ERROR_10X.WISHLIST.VOID ]</span>
                        <span>[ ERROR_10X.WISHLIST.VOID ]</span>
                        <span>[ ERROR_10X.WISHLIST.VOID ]</span>
                    </div>
                    <div className="no-item-text">
                        <p>No items. No cravings. Just the void and your excuses.</p>
                        <p>You've flagged nothing. Do you even want a manga?</p>
                        <p><span>&gt; Directive:</span> Save what they said you couldn't afford.</p>
                    </div>
                    <Link to="/shop-all" className="browse-btn">BROWSE MANGA</Link>
                </div>
            </div>
        );
    }        
}