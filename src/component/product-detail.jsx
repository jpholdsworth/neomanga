import { useParams } from "react-router-dom";
import MangaData from "../../manga-data.js";
import HeaderSection from "./header-section.jsx";
import FooterSection from "./footer-section.jsx";

export default function ProductDetail() {
    const { productId } = useParams();

    const product = MangaData.filter(manga => manga.id === productId)[0];

    return (
        <>
            <HeaderSection />
            {/* <button type="submit" onClick={() => window.history.back()}>Back</button> */}
            <div>
                <img src={product.image} alt="" />
                <div>
                    <div>
                        <h1>{product.title}</h1>
                        <p>£{product.price}</p>
                    </div>
                    <p>Volume {product.vol}</p>
                    <div>
                        {product.genres.map(genre => <p>{genre}</p>)}
                    </div>
                    <p>{product.context.main}</p>
                    <p>{product.context.sub}</p>
                    <p>Author</p>
                    <p>{product.author.name}</p>
                    <p>{product.author.bio}</p>
                </div>
            </div>
            <FooterSection />
        </>
    );
}