export default function FooterDetails() {
    return (
        <>
            <div className="contact-section">
                <div className="details">
                    <div>
                        <h3>COMPANY</h3>
                        <a>Our Story</a>
                        <a>Shop Locations</a>
                        <a>Career Opportunities</a>
                    </div>
                    <div>
                        <h3>BRAND</h3>
                        <a>Reviews</a>
                        <a>Blog</a>
                        <a>Events</a>
                        <a>Newsletters</a>
                    </div>
                    <div>
                        <h3>HELP</h3>
                        <a>Shopping & Returns</a>
                        <a>FAQ</a>
                        <a>Contact Us</a>
                    </div>
                </div>
                <div className="social">
                    <div>
                        <h3>Follow Us</h3>
                        <i className="fa-brands fa-tiktok"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                    </div>
                    <div>
                        <i className="fa-brands fa-cc-visa"></i>
                        <i className="fa-brands fa-cc-mastercard"></i>
                        <i className="fa-brands fa-paypal"></i>
                        <i className="fa-brands fa-cc-amex"></i>
                    </div>
                </div>
            </div>
            <div className="policies">
                <p>© 2025 <span className="footer-title">NEOMANGA//</span></p>
                <a>Privacy</a>
                <a>Accessibility</a>
                <a>Terms and Conditions</a>
                <a>Refund Policy</a>
            </div>
        </>
    );
}