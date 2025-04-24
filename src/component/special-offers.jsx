import "../styles/special-offers.css";

export default function SpecialOffers({ onePiece }) {
    const onePieceManga = onePiece.sort((a, b) => a.vol - b.vol);

    return (
        <div className="special-offer">
            <h1 className="subheading">Special Offers</h1>
            <div className="special-container">
                <div className="offer-text">
                    <p>20% Off When You Pick Any 3 Manga</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, illum. Omnis pariatur et optio laudantium voluptas excepturi quisquam impedit aspernatur rem debitis quo consequuntur nemo culpa reprehenderit, ab commodi quae.</p>
                    <button>Shop Now</button>
                </div>
                <div className="three-manga">
                    {onePieceManga.map(obj => <img key={obj.id} src={obj.image} alt="" /> )}
                </div>
            </div>
        </div>
    )
}