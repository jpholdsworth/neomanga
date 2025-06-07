import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ItemInCart from "./cart-item";

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
        setQuantities(prev => ({ ...prev, [productId]: newQuantity }));
    }

    const grandTotal = cart.reduce((total, product) => {
        const quantity = quantities[product.id] || 1;
        return total + product.price * quantity;
    }, 0);

    return (
        <div>
            <h1>Shopping Basket</h1>
            <hr />
            {cart.map(product => (
                <div key={product.id}>
                    <ItemInCart 
                        product={product}
                        quantity={quantities[product.id] || 1}
                        onQuantityChange={handleQuantityChange}
                        removeItem={removeFromCart}
                    />
                </div>
            ))}
            <h2>Total : £ {grandTotal.toFixed(2)}</h2>
        </div>
    );
}