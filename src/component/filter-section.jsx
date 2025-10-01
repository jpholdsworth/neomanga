import { useLocation, useOutletContext } from "react-router-dom";

function FilterBox({ title, children }) {
    return (
        <>
            <p>{title}</p>
            <div>
                {children}
            </div>
        </>
    );
}

export default function FilterSection() {
    const location = useLocation();
    const { filterQuery, setFilterQuery } = useOutletContext();

    const uniqueGenres = [
        'Shōnen', 'Seinen', 'Action', 'Adventure', 'Comedy', 'Coming-of-age', 
        'Cyberpunk', 'Dark Fantasy', 'Dystopian', 'Epic', 'Epic Fantasy', 
        'Fantasy', 'Historical', 'Horror', 'Martial arts', 'Mystery', 'Post-apocalyptic', 
        'Political thriller', 'Psychological', 'Psychological Thriller', 'Romance', 
        'Romantic comedy', 'Samurai', 'Science Fantasy', 'Science Fiction', 'Slice of life', 
        'Sports', 'Steampunk', 'Superhero', 'Supernatural', 'Supernatural Thriller', 
        'Sword and Sorcery', 'Thriller'
    ];

    const handleGenre = (event, newGenre) => {
        setFilterQuery({ 
          ...filterQuery, 
          genres: event.target.checked ? [...filterQuery.genres, newGenre] : filterQuery.genres.filter(g => g !== newGenre) 
        });
    }

    const handleChangePrice = (value) => {
        setFilterQuery({
            ...filterQuery,
            maxPrice: value
        });
    }

    const clearFilter = () => {
        setFilterQuery({
            genres: [],
            maxPrice: 60
        });
    }

    return (
        <>
            {location.pathname === "/shop-all" && (<>
                <div className="filter-selection-container">
                    <FilterBox title="genres:">
                        {uniqueGenres.map((genre, idx) =>
                            <div key={idx}>
                                <input
                                  type="checkbox"
                                  id={`genre-${idx}`}
                                  name="genres"
                                  value={genre}
                                  checked={filterQuery.genres.includes(genre)}
                                  onChange={e => handleGenre(e, genre)}
                                />  
                                <label htmlFor={`genre-${idx}`}>{genre}</label>
                            </div>
                        )}
                    </FilterBox>
                    <FilterBox title={`PRICE RANGE : up to £ ${filterQuery.maxPrice}`}>
                        <input
                          type="range"
                          id="max-price"
                          name="maxPrice"
                          min={7}
                          max={60}
                          step={1}
                          value={filterQuery.maxPrice}
                          onChange={e => handleChangePrice(Number(e.target.value))}
                        />
                    </FilterBox>
                </div>
                <button onClick={() => clearFilter()}>clear filter</button>
            </>)}
        </>
    );
}