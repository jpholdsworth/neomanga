import App from "./App";
import Home from "./component/home";
import ErrorPage from "./component/error-page";

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
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
        ],
    },
];

export default routes;