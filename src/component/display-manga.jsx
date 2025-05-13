import { useState } from "react";
import MangaGridDisplay from "./manga-grid";
import IndexNavigation from "./index-navigation";
import "../styles/display-manga.css";
import "../styles/genres.css";

export default function DisplayManga({ manga }) {
    const [index, setIndex] = useState(0);

    const maxIndex = Math.floor(manga.length / 12);
    const sectionIndex = index * 12;

    return (
        <div className="display-container">
            <MangaGridDisplay 
                mangaData={manga}
                sectionIndex={sectionIndex}
            />
            <IndexNavigation 
                index={index}
                maxIndex={maxIndex}
                changeIndexFn={setIndex}
            />
        </div>
    );
}