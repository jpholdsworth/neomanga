export default function SubsriptionBox() {
    return(
        <div className="subscribe-container">
            <div>
                <h4>Be a Part of the <span className="title">NeoManga//</span> Community</h4>
                <p>Transmit your email address to unlock exclusive manga deals, special event updates, and the latest blog posts — straight to your inbox!</p>
            </div>
            <div>
                <input type="email" placeholder="Email Address" />
                <button className="subscribe-btn">Subscribe</button>
            </div>
        </div>
    );
}