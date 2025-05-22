export default function AdditionalInfo({ productInfo, longDesc=false }) {
    return (
        <>
            <hr className={longDesc ? "section-break-line" : "product-break-line"}/>
            <div className="additional-info-section">
                <div className="info">
                    <p>Print Length</p>
                    <i className="fa-regular fa-file-lines"></i>
                    <p>{productInfo.pageLength} pages</p>
                </div>
                <div className="info">
                    <p>Language</p>
                    <i className="fa-solid fa-language"></i>
                    <p>English</p>
                </div>
                <div className="info">
                    <p>Publisher</p>
                    <i className="fa-regular fa-building"></i>
                    <p>{productInfo.publisher}</p>
                </div>
                <div className="info">
                    <p>ISBN-13</p>
                    <i className="fa-solid fa-barcode"></i>
                    <p>{productInfo.isbn}</p>
                </div>
            </div>
        </>
    );
}