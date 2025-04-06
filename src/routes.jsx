import App from "./App";
import ErrorPage from "./component/error-page";

// children
// APP
    // HOME
    // BEST SELLERS
    // NEW RELEASES
    // SHOP ALL
        // PRODUCT DETAILS
    // SHOPPING CART
    // ACCOUNT SIGN IN
    // FILTER SEARCH
    // WISHLIST

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
    },
];

export default routes;