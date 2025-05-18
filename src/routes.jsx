import App from "./App";
import Home from "./component/home";
import ErrorPage from "./component/error-page";
import Products from "./component/products";
import MangaProduct from "./component/product-detail";

// APP
    // BEST SELLERS
    // NEW RELEASES
    // SHOP ALL
        // PRODUCT DETAILS - children: [ { path: 'shop-all/:id', element: <ProductDetail /> }]
    // TODO: SHOPPING CART
    // TODO: ACCOUNT SIGN IN
    // TODO: FILTER SEARCH
    // TODO: WISHLIST

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <Home /> },
            { path: 'best-sellers', element: <Products type="best-selling" /> },
            { path: 'new-arrivals', element: <Products type="new-arrivals" /> },
            { path: 'shop-all', element: <Products /> }
        ],
    },
    {
        path: '/product/:productId',
        element: <MangaProduct />
    }
];

export default routes;