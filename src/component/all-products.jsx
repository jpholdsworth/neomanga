import { useOutletContext } from "react-router-dom";
import DisplayManga from "./display-manga";

export default function AllProducts() {
    const [mangaData] = useOutletContext();

    // STATE FOR MANGA - IMMUTABLE

    return (
        <div>
            {/* filter section */}
            <DisplayManga manga={mangaData} />
        </div>
    );
}