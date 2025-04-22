import { useOutletContext } from "react-router-dom";
import MangaCarousel from "./manga-carousel";
import FeaturedCollection from "./featured";

export default function Home() {
    const [MangaData] = useOutletContext();
    
    const random = MangaData.sort(() => 0.5 - Math.random()).slice(0, 6);
    const featuredManga = MangaData.find((obj) => obj.title === "AKIRA");
    console.log(featuredManga);

    return (
        <>
            <MangaCarousel data={random} />
            <FeaturedCollection data={featuredManga} />
            {/* FEATURED COLLECTION */}
            <div>
                {/* SPECIAL OFFER - 10% off for 3 books */}
            </div>
            <div>
                {/* BLOG POSTS / UPCOMING EVENTS */}
            </div>
        </>
    );
}