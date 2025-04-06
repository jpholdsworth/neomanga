import { useOutletContext } from "react-router-dom";

export default function Home() {
    const [MangaData] = useOutletContext();
    
    function randomise(data) {
        return data.sort(() => 0.5 - Math.random()).slice(0, 4);
    }

    const random = randomise(MangaData);

    return (
        <>
            <div>
                {random.map(manga => 
                    <div key={manga.id}>
                        <img src={manga.image} alt="" />
                        <h1>{manga.title}</h1>
                        <p>Volume {manga.vol}</p>
                    </div>
                )}
                {/* DISPLAY 4 RANDOM MANGAS - 6 MANGAS for CAROUSEL EFFECT */}
            </div>
            <div>
                {/* FEATURED COLLECTION */}
            </div>
            <div>
                {/* SPECIAL OFFER - 10% for 3 books in the MANGA UNIVERSE */}
            </div>
            <div>
                {/* BLOG POSTS / UPCOMING EVENTS */}
            </div>
        </>
    );
}