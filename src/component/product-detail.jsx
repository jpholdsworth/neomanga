import { useParams } from "react-router-dom";
import MangaData from "../../manga-data.js";
import HeaderSection from "./header-section.jsx";
import AdditionalInfo from "./additional-info.jsx";
import FooterSection from "./footer-section.jsx";
import "../styles/product-detail.css";

export default function ProductDetail() {
    const { productId } = useParams();

    const product = MangaData.filter(manga => manga.id === productId)[0];
    const longDesc = [/Monster/g, /Bleach /g, /PTSD/g, /Century/g, /Dragon/g]
                        .map(regex => product.title.match(regex))
                        .filter(item => item !== null).length > 0;
    console.log(longDesc);

    return (
        <>
            <HeaderSection />
            {/* <button type="submit" onClick={() => window.history.back()}>Back</button> */}
            <div className="detail-container">
                <img src={product.image} alt="" />
                <div className="product-details">
                    <div className="title-and-vol">
                        <h1 className={product.title.length > 20 ? "long-title" : ""}>{product.title}</h1>
                        <p>{product.vol !== null && `Volume ${product.vol}`}</p>
                    </div>
                    <div className="product-genres">
                        {product.genres.map(genre => <p key={genre} className={`genre-tag ${genre.toLowerCase().split(" ").join("-")}`}>{genre}</p>)}
                    </div>
                    <p className="context">{product.context.main}</p>
                    <p className="context">{product.context.sub}</p>
                    <div className="product-btns">
                        <button className="add-cart-btn"><i className="fa-solid fa-cart-plus"></i> ADD TO CART</button>
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
            <FooterSection />
        </>
    );
}