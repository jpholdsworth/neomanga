export default function FooterDetails() {
    return (
        <>
            <div className="contact-section">
                <div className="details">
                    <div>
                        <h3>COMPANY</h3>
                        <a>OUR STORY</a>
                        <a>SHOP LOCATIONS</a>
                        <a>CAREER OPPORTUNITIES</a>
                    </div>
                    <div>
                        <h3>BRAND</h3>
                        <a>REVIEWS</a>
                        <a>BLOG</a>
                        <a>EVENTS</a>
                        <a>NEWSLETTERS</a>
                    </div>
                    <div>
                        <h3>HELP</h3>
                        <a>SHOPPING & RETURNS</a>
                        <a>FAQ</a>
                        <a>CONTACT US</a>
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
                        <i className="fa-brands fa-cc-paypal"></i>
                        <i className="fa-brands fa-cc-amex"></i>
                        <i className="fa-brands fa-cc-apple-pay"></i>
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