import App from "./App";
import Home from "./component/home";
import ErrorPage from "./component/error-page";
import ItemList from "./component/item-list";
import Products from "./component/products";
import ProductDetail from "./component/product-detail";

// TODO: ACCOUNT SIGN IN
// TODO: FILTER SEARCH

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <Home /> },
            { path: 'wishlist', element: <ItemList type="wishlist" /> },
            { path: 'cart', element: <ItemList type="cart" /> },
            { path: 'best-sellers', element: <Products type="best-selling" /> },
            { path: 'new-arrivals', element: <Products type="new-arrivals" /> },
            { path: 'shop-all', element: <Products /> },
            { path: '/product/:productId', element: <ProductDetail /> }
        ],
    },
];

export default routes;