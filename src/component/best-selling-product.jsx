import { useOutletContext } from "react-router-dom";
import DisplayManga from "./display-manga";

export default function BestSellingProducts() {
    const [MangaData] = useOutletContext()
    const bestSellingManga = MangaData.filter(obj => obj.additionalInfo.bestSeller);
    console.log(bestSellingManga)

    return (
        <div>
            {/* filter section */}
            <DisplayManga manga={bestSellingManga} panelCount={15} />
        </div>
    );
}