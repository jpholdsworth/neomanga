export default function MangaGridDisplay({ mangaData, sectionIndex }) {
    return (
        <div className="manga-grid">
            {mangaData.slice(sectionIndex, sectionIndex + 12).map(obj => 
                <div key={obj.id} className="product-container">
                    <div className="manga-grid-item">
                        <img src={obj.image} alt="" />
                        <div className="item-details">
                            <h4>{obj.title}</h4>
                            <p>£{obj.price}</p>
                            <div className="genres">
                                {obj.genres.slice(1).map(genre => <p key={genre} className={`genre-tag ${genre.toLowerCase().split(" ").join("-")}`} >{genre}</p>)}
                            </div>
                            <p>Volume {obj.vol}</p>
                            <p>By: {obj.author.name}</p>
                        </div>
                    </div>
                    <div className="item-btns">
                        <button className="add-cart-btn"><i className="fa-solid fa-cart-plus"></i> ADD TO CART</button>
                        { obj.additionalInfo.wishlist ? <i className="wishlist fa-solid fa-heart"></i> : <i className="wishlist fa-regular fa-heart"></i> }
                    </div>
                </div>
            )}
        </div>
    );
}