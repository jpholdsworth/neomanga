export default function HeaderSection() {
    return (
        <>
            <div className="header-section">
                <div className="Logo">
                    <h1>NeoMANGA</h1>
                </div>
                <div>
                    <input type="text" />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="link">
                    <p>Sign In</p>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        </>
    );
}