import { useOutletContext } from "react-router-dom";
import MangaCarousel from "./manga-carousel";
import FeaturedCollection from "./featured";
import SpecialOffers from "./special-offers";
import BlogPosts from "./blog";

export default function Home() {
    const { mangaData } = useOutletContext();
    
    const random = mangaData.sort(() => 0.5 - Math.random());
    const featuredManga = mangaData.find((obj) => obj.title === "AKIRA");
    const onePieceManga = mangaData.filter((obj) => obj.title === "One Piece" && obj.vol >= 100);

    return (
        <>
            <MangaCarousel data={random.slice(0, 6)} />
            <FeaturedCollection data={featuredManga} />
            <SpecialOffers onePiece={onePieceManga} />
            <BlogPosts />
        </>
    );
}