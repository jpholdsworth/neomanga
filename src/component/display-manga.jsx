import { useState } from "react";
import "../styles/display-manga.css";

export default function DisplayManga({ manga }) {
    const [index, setIndex] = useState(0);

    const maxIndex = Math.floor(manga.length / 12);
    const sectionIndex = index * 12;

    return (
        <div className="display-container">
            <div className="manga-grid">
                {manga.slice(sectionIndex, sectionIndex + 12).map(obj => 
                    <div key={obj.id}>
                        <img src={obj.image} alt="" />
                    </div>
                )}
            </div>
            <div className="index-nav">
                <button disabled={index ? false : true} onClick={() => setIndex(index - 1)}>&#8882;</button>
                {[...Array(maxIndex + 1)].map((_, i) => <div key={i} onClick={() => setIndex(i)}>{i + 1}</div>)}
                <button disabled={index !== maxIndex ? false : true} onClick={() => setIndex(index + 1)}>&#8883;</button>
            </div>
        </div>
    );
}