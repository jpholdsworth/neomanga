import { useOutletContext, Link } from "react-router-dom";
import "../styles/featured.css";

export default function FeaturedCollection({ data }) {
    const { cart, addItem } = useOutletContext();

    return (
        <div className="featured-collection">
            <h1 className="subheading">Featured Collection</h1>
            <div className="featured-container">
                <Link to={`/product/${data.id}`}>
                    <img className="akira-img" src={data.image} alt={data.title} />
                </Link>
                <div>
                    <p>Power. <br />Chaos. <br />Revolution. <br />Welcome to Neo-Tokyo.</p>
                    <p>{data.context.main}</p>
                    <p>{data.context.sub}</p>
                    <button 
                      className="add-cart-btn akira"
                      disabled={cart.includes(data)}
                      onClick={(event) => { event.preventDefault(); event.stopPropagation(); addItem(data)}}
                    >
                        { cart.includes(data) ? "ADDED TO CART" : <><i className="fa-solid fa-cart-plus"></i> ADD TO CART</> }
                    </button>
                    <img className="fade-img" src={data.image} alt="" />
                </div>
            </div>
        </div>
    )
}