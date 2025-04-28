import { useOutletContext } from "react-router-dom";
import MangaCarousel from "./manga-carousel";
import FeaturedCollection from "./featured";
import SpecialOffers from "./special-offers";
import BlogPosts from "./blog";

export default function Home() {
    const [MangaData] = useOutletContext();
    
    const random = MangaData.sort(() => 0.5 - Math.random()).slice(0, 6);
    const featuredManga = MangaData.find((obj) => obj.title === "AKIRA");
    const onePieceManga = MangaData.filter((obj) => obj.title === "One Piece" && obj.vol >= 100);

    return (
        <>
            <MangaCarousel data={random} />
            <FeaturedCollection data={featuredManga} />
            <SpecialOffers onePiece={onePieceManga} />
            <BlogPosts />
        </>
    );
}