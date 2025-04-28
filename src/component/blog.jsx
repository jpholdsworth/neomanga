import BlogData from "../../blog-data";
import "../styles/blog.css";

export default function BlogPosts() {
    return (
        <div className="blog-section">
            <h1 className="blog subheading">BLOG</h1>
            <div className="blog-container">
                {BlogData.map((blog, index) => 
                    <div key={blog.id} id={"blog-" + index} className="blog-post">
                        <img src={blog.image} alt="" />
                        <p>{blog.date} / NEOMANGA//</p>
                        <p>{blog.category}</p>
                        <p>{blog.title}</p>
                        <p>{blog.blurb}</p>
                        <button>READ MORE</button>
                    </div>
                )}
            </div>
        </div>
    );
}