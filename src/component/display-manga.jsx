import { useState } from "react";
import MangaGridDisplay from "./manga-grid";
import IndexNavigation from "./index-navigation";
import "../styles/display-manga.css";
import "../styles/genres.css";

export default function DisplayManga({ products, panelCount }) {
    const [index, setIndex] = useState(0);

    const maxIndex = Math.floor(products.length / panelCount);
    const sectionIndex = index * panelCount;

    return (
        <div className="display-container">
            <MangaGridDisplay 
                mangaData={products}
                sectionIndex={sectionIndex}
                length={panelCount}
            />
            <IndexNavigation 
                index={index}
                maxIndex={maxIndex}
                changeIndexFn={setIndex}
            />
        </div>
    );
}