import { useOutletContext } from "react-router-dom";

function FilterBox({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}

export default function FilterSection() {
    const { filterQuery, handleGenre, handleChangePrice } = useOutletContext();

    const uniqueGenres = [
        'Shōnen', 'Seinen', 'Action', 'Adventure', 'Comedy', 'Coming-of-age', 
        'Cyberpunk', 'Dark Fantasy', 'Dystopian', 'Epic', 'Epic Fantasy', 
        'Fantasy', 'Historical', 'Horror', 'Martial arts', 'Mystery', 'Post-apocalyptic', 
        'Political thriller', 'Psychological', 'Psychological Thriller', 'Romance', 
        'Romantic comedy', 'Samurai', 'Science Fantasy', 'Science Fiction', 'Slice of life', 
        'Sports', 'Steampunk', 'Superhero', 'Supernatural', 'Supernatural Thriller', 
        'Sword and Sorcery', 'Thriller'
    ];

    return (
        <div className="filter-selection-container">
            <FilterBox>
                {uniqueGenres.map((genre, idx) => 
                    <div key={idx}>
                        <label>
                            <input 
                              type="checkbox" 
                              value={genre}
                              checked={filterQuery.genres.includes(genre)}
                              onChange={e => handleGenre(e, genre)}
                            />
                            {genre}
                        </label>
                    </div>
                )}
            </FilterBox>
            <FilterBox>
                <label>PRICE : </label>
                <span>
                    up to £ {filterQuery.maxPrice}
                </span>
                <input 
                  type="range"
                  min={7}
                  max={60}
                  step={1}
                  value={filterQuery.maxPrice}
                  onChange={e => handleChangePrice(Number(e.target.value))}
                />
            </FilterBox>
        </div>
    );
}