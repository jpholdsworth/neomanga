import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MangaGrid from "./manga-grid";
import Pagination from "./pagination";
import "../styles/display-manga.css";
import "../styles/genres.css";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function DisplayManga({ products, panelCount }) {
    const query = useQuery();
    const location = useLocation();
    const navigate = useNavigate();

    const initialIndex = parseInt(query.get("page")) || 0;
    const [index, setIndex] = useState(initialIndex);

    useEffect(() => {
        if (location.pathname !== "/shop-all") {
            setIndex(0);
        }
    }, [location.pathname]);

    function handleSetIndex(newIndex) {
        setIndex(newIndex);

        if (location.pathname === "/shop-all") navigate(`${location.pathname}?page=${newIndex}`, { replace: true });

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const currentProducts = products.slice(index * panelCount, (index + 1) * panelCount);
    const pageCount = Math.ceil(products.length / panelCount);

    return (
        <div className="manga-grid-display">
            <MangaGrid 
                currentProducts={currentProducts}
                index={index}
            />
            <Pagination 
                index={index}
                pageCount={pageCount}
                handleSetIndex={handleSetIndex}
            />
        </div>
    );
}