export default function Navigation() {
    return (
        <div className="nav-bar">
            <h1>NeoMANGA</h1>
            <div className="search-bar">
                <input type="text" />
                <i className="fa-solid fa-magnifying-glass" />
            </div>
            <div className="icons-buttons">
                <i className="fa-solid fa-user" />
                <i className="fa-solid fa-heart" />
                <i className="fa-solid fa-cart-shopping" />
            </div>
        </div>
    );
}