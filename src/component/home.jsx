import { useOutletContext } from "react-router-dom";
import MangaCarousel from "./manga-carousel";

export default function Home() {
    const [MangaData] = useOutletContext();
    
    function randomise(data) {
        return data.sort(() => 0.5 - Math.random()).slice(0, 6);
    }

    const random = randomise(MangaData);

    return (
        <>
            <MangaCarousel data={random} />
            {/* DISPLAY 4 RANDOM MANGAS - 6 MANGAS for CAROUSEL EFFECT */}
            <div>
                {/* FEATURED COLLECTION */}
            </div>
            <div>
                {/* SPECIAL OFFER - 10% off for 3 books */}
            </div>
            <div>
                {/* BLOG POSTS / UPCOMING EVENTS */}
            </div>
        </>
    );
}