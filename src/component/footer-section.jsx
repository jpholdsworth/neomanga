import SubsriptionBox from "./subscription-box";
import FooterDetails from "./footer-details";
import "../styles/footer-section.css";

export default function FooterSection() {
    return (
        <div className="footer-section">
            <SubsriptionBox />
            <FooterDetails />
            {/* <div>
                GITHUB
            </div> */}
        </div>
    );
}