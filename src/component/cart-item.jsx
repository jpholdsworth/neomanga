export default function ItemInCart({ product, quantity, onQuantityChange, removeItem }) {
    function changeQuantity(value) {
        const newQty = quantity + value;
        if (newQty > 0) {
            onQuantityChange(product.id, newQty);
        }
    }

    return (
        <>
            <img src={product.image} alt="" />
            <div className="item-title">
                <p>{product.title}</p>
                {product.vol && <p>Volume {product.vol}</p>}
            </div>
            <p>£ {product.price}</p>
            <div className="quantity-btns">
                <button onClick={() => changeQuantity(-1)} disabled={quantity === 1}>-</button>
                <p>{quantity}</p>
                <button onClick={() => changeQuantity(1)}>+</button>
            </div>
            <p>£ {(product.price * quantity).toFixed(2)}</p>
            <button onClick={() => removeItem(product.id)}>Remove</button>
        </>
    );
}