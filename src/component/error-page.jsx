import { useRouteError } from "react-router-dom";
import '../styles/error-page.css';

function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page">
            <div>
                <h1 className="error-title">NeoMANGA//</h1>
                <h1 className="error-title">NeoMANGA//</h1>
            </div>
            <div className="glitch">
                <span>[ ERROR 404X ]</span>
                <span>[ ERROR 404X ]</span>
                <span>[ ERROR 404X ]</span>
            </div>
            <p>Nice try, cowboy.</p>
            <p>That route's a ghost-deleted, deprecated, and dumped in the data gutter.</p>
            <p><span>&gt; Suggestion:</span> try not sucking at navigation</p>
        </div>
    )
}

export default ErrorPage;