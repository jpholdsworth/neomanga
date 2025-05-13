import { useState } from "react";
import MangaGridDisplay from "./manga-grid";
import IndexNavigation from "./index-navigation";
import "../styles/display-manga.css";
import "../styles/genres.css";

export default function DisplayManga({ manga, panelCount }) {
    const [index, setIndex] = useState(0);

    const maxIndex = Math.floor(manga.length / panelCount);
    const sectionIndex = index * panelCount;

    return (
        <div className="display-container">
            <MangaGridDisplay 
                mangaData={manga}
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