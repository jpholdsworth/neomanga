export default function ItemInList({ 
    type,
    product, 
    quantity, 
    onQuantityChange, 
    removeItem, 
    handleItem,
    list
}) {
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
                {product.vol !== null && <p>Volume {product.vol}</p>}
            </div>
            <div className="price-container">
                <p>£ {product.price}</p>
                {type === "cart" && <>
                    <div className="quantity-container">
                        <p>Quantity</p>
                        <div className="quantity-buttons">
                            <button className="quantity-btn" onClick={() => {quantity === 1 ? removeItem(product.id) : changeQuantity(-1)}}>
                                {quantity == 1 ? <i className="fa-solid fa-trash"></i> : "-"}
                            </button>
                            <p>{quantity}</p>
                            <button className="quantity-btn" onClick={() => changeQuantity(1)}>+</button>
                        </div>
                    </div>
                    <p>£ {(product.price * quantity).toFixed(2)}</p>
                </>}
                {type === "wishlist" && (
                    <button 
                      className="add-cart-btn"
                      disabled={list.includes(product)}
                      onClick={(event) => handleItem(event, product)}
                    >
                        { list.includes(product) ? "ADDED TO CART" : <><i className="fa-solid fa-cart-plus"></i> ADD TO CART</> }
                    </button>
                )}
                <button className="delete-btn" onClick={() => removeItem(product.id)}>Delete</button>
            </div>
        </>
    );
}