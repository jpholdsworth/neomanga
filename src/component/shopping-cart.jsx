import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ItemInCart from "./cart-item";
import "../styles/shopping-cart.css";

export default function Cart() {
    const { cart, removeFromCart } = useOutletContext();
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

    return (
        <div>
            <h1 className="cart-title">Shopping Basket</h1>
            <div className="items">
                {cart.map(product => (
                    <div key={product.id} className="cart-item">
                        <ItemInCart 
                            product={product}
                            quantity={quantities[product.id] || 1}
                            onQuantityChange={handleQuantityChange}
                            removeItem={removeFromCart}
                        />
                    </div>
                ))}
            </div>
            <div>
                <h2>Total : £ {grandTotal.toFixed(2)}</h2>
            </div>
        </div>
    );
}