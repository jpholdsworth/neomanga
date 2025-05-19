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
                    <p className="product-author">by: {product.author.name}</p>
                    {/* <p>£{product.price}</p> */}
                    {/* <div>
                        {product.genres.map(genre => <p>{genre}</p>)}
                    </div>
                    <p>{product.context.main}</p>
                    <p>{product.context.sub}</p>
                    <p>Author</p>
                    <p>{product.author.name}</p>
                    <p>{product.author.bio}</p> */}
                </div>
            </div>
            <FooterSection />
        </>
    );
}