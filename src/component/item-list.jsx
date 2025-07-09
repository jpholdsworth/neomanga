import { useOutletContext, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemInList from "./display-item";
import "../styles/item-list.css";

function CheckoutPrice({ quantity, grandTotal, removeAllItems }) {
    const totalQuantity = Object.values(quantity).reduce((sum, qty) => sum + qty, 0);
    const discount = (grandTotal * 0.2).toFixed(2);
    const shippingFee = grandTotal.toFixed(2) - discount < 25 ? 3.99 : 0;

    return (
        <>
            <p>Subtotal : £ {grandTotal.toFixed(2)}</p>
            { totalQuantity >= 3 && <p>Discount [ 20% OFF ] : £ {discount}</p> }
            { shippingFee ? <p>Shipping : £ { shippingFee }</p> : <p>Free Shipping : £ 0.00</p> }
            <hr className="checkout-breakline" />
            <p>Total : £ {(grandTotal.toFixed(2) - discount + shippingFee).toFixed(2)} </p>
            <button 
              onClick={() => {
                window.alert("Oi! Thought you could slip past without payin'?!\n[ ERROR_200X : TRANSACTION COMPLETE ]\nYour order has breached the void.\nAppreciation: sarcastically noted.");
                removeAllItems();
              }} 
              className="checkout-btn"
            >
                Proceed to Checkout
            </button>
        </>
    );
}

export default function ItemList({ type }) {
    const { cart, wishlist, removeItem, resetCart, handleItem } = useOutletContext();
    const [quantities, setQuantities] = useState({});

    const title = type == "cart" ? "Shopping Basket" : "Your Wishlist";

    useEffect(() => {
        const initialQuanitities = {};
        cart.forEach(item => {
            initialQuanitities[item.id] = item.quantity || 1;
        });
        setQuantities(initialQuanitities);
    }, [cart]);

    function handleQuantityChange(productId, newQuantity) {
        setQuantities({ ...quantities, [productId]: newQuantity });
    }

    const grandTotal = cart.reduce((total, product) => total + product.price * (quantities[product.id] || 1), 0);

    if ((type === "cart" && cart.length) || (type === "wishlist" && wishlist.length)) {
        return (
            <div className="list-container">
                <h1 className="list-title">{title}</h1>
                <div className="items">
                    { type === "cart" ? (
                        <>
                        {cart.map((product, idx) => (
                            <div key={product.id} className={`list-item ${idx === cart.length - 1 ? "last" : ""}`}>
                                <ItemInList
                                    type="cart"
                                    product={product}
                                    quantity={quantities[product.id] || 1}
                                    onQuantityChange={handleQuantityChange}
                                    removeItem={removeItem}
                                />
                            </div>
                        ))}
                        <div className="checkout-container">
                            <CheckoutPrice quantity={quantities} grandTotal={grandTotal} removeAllItems={resetCart} />
                        </div>
                        </>
                    ) : (
                        <>
                        {wishlist.map((product, idx) => (
                            <div key={product.id} className={`list-item ${idx === wishlist.length - 1 ? "last" : ""}`}>
                                <ItemInList 
                                    type="wishlist"
                                    product={product}
                                    removeItem={removeItem}
                                    handleItem={handleItem}
                                    list={cart}
                                />
                            </div>
                        ))}
                        </>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="list-container">
            <div className="no-item">
                <div className="glitch">
                    <span>[ ERROR_100X.{type.toUpperCase()}.VOID ]</span>
                    <span>[ ERROR_100X.{type.toUpperCase()}.VOID ]</span>
                    <span>[ ERROR_100X.{type.toUpperCase()}.VOID ]</span>
                </div>
                <div className="no-item-text">
                    {type === "cart" ? (
                        <>
                        <p>Just the void staring back - cold, endless, waiting . . .</p>
                        <p>Load your arsenal before the silence consumes you</p>
                        <p><span>&gt; Directive:</span> Dive into a new universe</p>
                        </>
                    ) : (
                        <>
                        <p>No items. No cravings. Just the void and your excuses</p>
                        <p>You've flagged nothing. Do you even want a manga?</p>
                        <p><span>&gt; Directive:</span> Save what they said you couldn't afford</p>
                        </>
                    )}
                </div>
                <Link to="/shop-all" className="browse-btn">BROWSE MANGA</Link>
            </div>
        </div>
    );
}