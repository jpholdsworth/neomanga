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
                        <p className={"blog-category " + blog.category}>{blog.category}</p>
                        <div className="blog-text">
                            <p className="blog-date">{blog.date} / NEOMANGA//</p>
                            <p className="blog-title">{blog.title}</p>
                            <p className="blog-blurb">{blog.blurb}</p> 
                        </div>
                        <button>READ MORE</button>
                    </div>
                )}
            </div>
        </div>
    );
}