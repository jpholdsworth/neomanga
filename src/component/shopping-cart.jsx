import { useState, useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";
import ItemInCart from "./cart-item";
import "../styles/shopping-cart.css";

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
    )
}

export default function Cart() {
    const { cart, removeItem, resetCart } = useOutletContext();
    const [quantities, setQuantities] = useState({});

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

    const grandTotal = cart.reduce((total, product) => {
        const quantity = quantities[product.id] || 1;
        return total + product.price * quantity;
    }, 0);

    if (cart.length) {
        return (
            <div className="cart-container">
                <h1 className="cart-title">Shopping Basket</h1>
                <div className="items">
                    {cart.map(product => (
                        <div key={product.id} className="cart-item">
                            <ItemInCart 
                                product={product}
                                quantity={quantities[product.id] || 1}
                                onQuantityChange={handleQuantityChange}
                                removeItem={removeItem}
                            />
                        </div>
                    ))}
                </div>
                <div className="checkout-container">
                    <CheckoutPrice quantity={quantities} grandTotal={grandTotal} removeAllItems={resetCart} />
                </div>
            </div>
        );
    } else {
        return (
            <div className="cart-container">
                <div className="no-item">
                    <div className="glitch">
                        <span>[ ERROR_100X.CART.VOID ]</span>
                        <span>[ ERROR_100X.CART.VOID ]</span>
                        <span>[ ERROR_100X.CART.VOID ]</span>
                    </div>
                    <div className="no-item-text">
                        <p>Just the void staring back — cold, endless, waiting . . .</p>
                        <p>Load your arsenal before the silence consumes you</p>
                        <p><span>&gt; Directive:</span> Dive into a new universe</p>
                        
                    </div>
                    <Link to="/shop-all" className="browse-btn">BROWSE MANGA</Link>
                </div>
            </div>
        )
    }
}