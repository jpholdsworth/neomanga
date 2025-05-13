import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import DisplayManga from "./display-manga";

export default function AllProducts() {
    const [MangaData] = useOutletContext();
    const [allManga, setAllManga] = useState(MangaData);

    // NEED TO DO FILTERING FOR MANGA

    return (
        <div>
            {/* filter section */}
            <DisplayManga manga={allManga} panelCount={12} />
        </div>
    );
}