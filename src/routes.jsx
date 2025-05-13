import App from "./App";
import Home from "./component/home";
import ErrorPage from "./component/error-page";
import BestSellingProducts from "./component/best-selling-product";
import NewArrivalProducts from "./component/new-arrival-product";
import AllProducts from "./component/all-products";

// APP
    // BEST SELLERS
    // NEW RELEASES
    // SHOP ALL
        // PRODUCT DETAILS - children: [ { path: 'shop-all/:id', element: <MangaProductDetail /> }]
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
            { path: '', element: <Home /> },
            { path: 'best-sellers', element: <BestSellingProducts /> },
            { path: 'new-arrivals', element: <NewArrivalProducts /> },
            { path: 'shop-all', element: <AllProducts /> }
        ],
    },
];

export default routes;