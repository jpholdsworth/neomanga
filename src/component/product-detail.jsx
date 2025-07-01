import { useOutletContext, useParams } from "react-router-dom";
import MangaData from "../../manga-data.js";
import AdditionalInfo from "./additional-info.jsx";
import "../styles/product-detail.css";

export default function ProductDetail() {
    const { cart, addItem } = useOutletContext();
    const { productId } = useParams();

    const product = MangaData.filter(manga => manga.id === productId)[0];
    const longDesc = [/Monster/g, /Bleach /g, /PTSD/g, /Century/g, /Dragon/g]
                        .map(regex => product.title.match(regex))
                        .filter(item => item !== null).length > 0;

    return (
        <>
            <div className="back-btn-container">
                <button className="back-btn" type="submit" onClick={() => window.history.back()}>&lt; Go Back</button>
            </div>
            <div className="detail-container">
                <img src={product.image} alt="" />
                <div className="product-details">
                    <div className="title-and-vol">
                        <h1 className={product.title.length > 18 ? "long-title" : ""}>{product.title}</h1>
                        <p>{product.vol !== null && `Volume ${product.vol}`}</p>
                    </div>
                    <div className="product-genres">
                        {product.genres.map(genre => <p key={genre} className={`genre-tag ${genre.toLowerCase().split(" ").join("-")}`}>{genre}</p>)}
                    </div>
                    <p className="context">{product.context.main}</p>
                    <p className="context">{product.context.sub}</p>
                    <div className="product-btns">
                        <p className="product-price">£<span className="price-tag">{product.price}</span></p>
                        <button 
                          className="add-cart-btn"
                          disabled={cart.includes(product)}
                          onClick={() => { addItem(product); }}
                        >
                            { cart.includes(product) ? "ADDED TO CART" : <><i className="fa-solid fa-cart-plus"></i> ADD TO CART</> }
                        </button>
                        {product.additionalInfo.wishlist ? <i className="wishlist fa-solid fa-heart"></i> : <i className="wishlist fa-regular fa-heart"></i> }
                    </div>
                    {!longDesc && <AdditionalInfo productInfo={product} /> }
                </div>
            </div>
            {longDesc && <AdditionalInfo productInfo={product} longDesc={longDesc} /> }
            <div className="author-details">
                <p className="product-author">About {product.author.name}:</p>
                <p className="author-bio">{product.author.bio}</p>
            </div>
        </>
    );
}