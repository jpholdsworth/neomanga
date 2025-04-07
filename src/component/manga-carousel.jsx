import "../styles/manga-carousel.css";

export default function MangaCarousel({ data }) {

    // WISHLIST BUTTON AND ADD TO THE CART
    // ADD ARROW FOR CAROUSEL EFFECT < >

    return (
        <div id="carousel">
            {data.map(manga => 
                <div key={manga.id}>
                    <img className="carousel-image" src={manga.image} alt="" />
                    <p className="manga-title">{manga.title}</p>
                    <p>Volume {manga.vol}</p>
                    <p>£{manga.price}</p>
                </div>
            )}
        </div>
    );
}