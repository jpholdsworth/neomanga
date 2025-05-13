import { useOutletContext } from "react-router-dom";
import DisplayManga from "./display-manga";

export default function NewArrivalProducts() {
    const [MangaData] = useOutletContext();
    const newArrivalManga = MangaData.filter(obj => obj.additionalInfo.newRelease);
    console.log(newArrivalManga.length)

    return (
        <div>
            {/* Filter section */}
            <DisplayManga manga={newArrivalManga} panelCount={7} />
        </div>
    );
}