import { useParams } from "react-router-dom";
import MangaData from "../../manga-data.js";
import HeaderSection from "./header-section.jsx";
import FooterSection from "./footer-section.jsx";
import "../styles/product-detail.css";

export default function ProductDetail() {
    const { productId } = useParams();

    const product = MangaData.filter(manga => manga.id === productId)[0];

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
                    <hr className="product-break-line"/>
                    <div className="additional-info-section">
                        <div className="info">
                            <p>Print Length</p>
                            <i className="fa-regular fa-file-lines"></i>
                            <p>{product.pageLength} pages</p>
                        </div>
                        <div className="info">
                            <p>Language</p>
                            <i className="fa-solid fa-language"></i>
                            <p>English</p>
                        </div>
                        <div className="info">
                            <p>Publisher</p>
                            <i className="fa-regular fa-building"></i>
                            <p>{product.publisher}</p>
                        </div>
                        <div className="info">
                            <p>ISBN-13</p>
                            <i className="fa-solid fa-barcode"></i>
                            <p>{product.isbn}</p>
                        </div>
                    </div>
                    {/* ADDITIONAL INFO ABOUT THE PRODUCT - Page length, Language, Publisher, Dimensions - 14.61 x 1.78 x 20.96, ISBN-13 */}
                </div>
            </div>
            <div className="author-details">
                <p className="product-author">About {product.author.name}:</p>
                <p className="author-bio">{product.author.bio}</p>
            </div>
            <FooterSection />
        </>
    );
}