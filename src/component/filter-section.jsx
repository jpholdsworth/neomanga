import { useOutletContext } from "react-router-dom";
import "../styles/filter-section.css";
import { useState } from "react";

function FilterBox({ title, className = "", genreSelected = [], children }) {
    const [isOpen, setIsOpen] = useState(false);
    const openClassName = isOpen ? "open" : "";

    return (
        <div className={`filter-box ${className} ${openClassName}`}>
            <div className="filter-text" onClick={() => setIsOpen(!isOpen)}>
                <p className="filter-title">
                    {title.toUpperCase()}
                </p>
                <span className={openClassName}>&raquo;</span>
            </div>
            {genreSelected.length > 0 && (
                <div className="genres-selected">
                    <span>Genre selected:</span>               
                    <p>{genreSelected.join(", ")}</p> 
                </div>
            )}
            <div className={`filter-content ${openClassName}`}>
                {children}
            </div>
        </div>
    );
}

export default function FilterSection() {
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
            <div className="filter-container">
                <FilterBox title="genres" genreSelected={filterQuery.genres}>
                    {uniqueGenres.map((genre, idx) =>
                        <div key={idx} className="checkbox-input">
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
                <FilterBox title={`PRICE RANGE up to £${filterQuery.maxPrice}`} className="no-scroll" >
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
                <button className="clear-filter-btn" onClick={() => clearFilter()}>clear filter</button>
            </div>
        </>
    );
}