import { useOutletContext } from "react-router-dom";
import DisplayManga from "./display-manga";

export default function Products({ type }) {
    const [mangaData] = useOutletContext();

    const data = type === "best-selling" 
        ? mangaData.filter(obj => obj.additionalInfo.bestSeller) 
        : type === "new-arrivals" 
        ? mangaData.filter(obj => obj.additionalInfo.newRelease) 
        : mangaData;
        
    return (
        <div>
            {/* filter section */}
            <DisplayManga products={data} panelCount={15} />
        </div>
    )
}