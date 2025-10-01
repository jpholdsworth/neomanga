import { useLocation, useOutletContext } from "react-router-dom";
import FilterSection from "./filter-section";
import DisplayManga from "./display-manga";
import { useEffect, useState } from "react";

function QuerySorter({ selectedCategory, sortCategory, panelCount, setPanelCount }) {
    return (
        <div className="category-container">
            <div>
                <label htmlFor="item-pp-select">Items per Page:</label>
                <div className="select-container">
                    <select
                        name="item-count"
                        id="item-pp-select"
                        value={panelCount}
                        onChange={e => {
                            setPanelCount(parseInt(e.target.value)); 
                            e.target.blur(); 
                        }}
                    >
                        <option value="9">9</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="category-select">Sort By:</label>
                <div className="select-container">
                    <select
                      name="categories"
                      id="category-select"
                      value={selectedCategory}
                      onChange={e => {
                        sortCategory(e.target.value);
                        e.target.blur();
                    }}
                    >
                        <option value="">Recommended</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="alphabet-a">Alphabetical: A to Z</option>
                        <option value="alphabet-z">Alphabetical: Z to A</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default function Products() {
    const { mangaData, selectedCategory, sortCategory, setFilterQuery } = useOutletContext();
    const [panelCount, setPanelCount] = useState(15);

    const location = useLocation();
    useEffect(() => {
        if (location.pathname !== "/shop-all") {
            setFilterQuery({ genres: [], maxPrice: 60 });
        }
    }, [location.pathname, setFilterQuery])

    return (
        <div>
            <QuerySorter
                selectedCategory={selectedCategory} 
                sortCategory={sortCategory}
                panelCount={panelCount}
                setPanelCount={setPanelCount}
            />
            <div className="main-body-container">
                {location.pathname === "/shop-all" && <FilterSection />}
                <DisplayManga products={mangaData} panelCount={panelCount} />
            </div>
        </div>
    )
}