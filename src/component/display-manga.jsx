import { useState } from "react";
import "../styles/display-manga.css";
import "../styles/genres.css";

export default function DisplayManga({ manga }) {
    const [index, setIndex] = useState(0);

    const maxIndex = Math.floor(manga.length / 12);
    const sectionIndex = index * 12;

    return (
        <div className="display-container">
            <div className="manga-grid">
                {manga.slice(sectionIndex, sectionIndex + 12).map(obj => 
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
            <div className="index-nav">
                <button disabled={index ? false : true} onClick={() => setIndex(index - 1)}>&#8882;</button>
                {[...Array(maxIndex + 1)].map((_, i) => <div key={i} className={'idx-btn' + (index === i ? ' active' : '')} onClick={() => setIndex(i)}>{i + 1}</div>)}
                <button disabled={index !== maxIndex ? false : true} onClick={() => setIndex(index + 1)}>&#8883;</button>
            </div>
        </div>
    );
}