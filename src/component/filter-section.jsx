import { useOutletContext } from "react-router-dom";

function FilterBox({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}

export default function FilterSection() {
    const { filterQuery, handleGenre } = useOutletContext();

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
                        <input 
                          type="checkbox" 
                          id={`genre-${idx}`}
                          name="genre"
                          value={genre}
                          checked={filterQuery.genres.includes(genre)}
                          onChange={e => handleGenre(e, genre)}
                        />
                        <label htmlFor={`genre-${idx}`}>
                            {genre}
                        </label>
                    </div>
                )}
            </FilterBox>
        </div>
    );
}