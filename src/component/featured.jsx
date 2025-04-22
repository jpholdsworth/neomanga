import "../styles/featured.css";

export default function FeaturedCollection({ data }) {
    return (
        <div className="featured-collection">
            <h1>Featured Collection</h1>
            {/* AKIRA */}
            <div className="featured-container">
                <img src={data.image} alt={data.title} />
                <div>
                    <p>Power. Chaos. Revolution. Welcome to Neo-Tokyo.</p>
                    <p>{data.context.main}</p>
                    <p>{data.context.sub}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}