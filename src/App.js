import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route } from "react-router-dom";
import ProductsPage from './pages/ProductsPage';
import { CART_PAGE, CATEGORY_PRODUCTS_PAGE, MAIN_HOMEPAGE, PRODUCT_DETAILS_PAGE, SEARCH_RESULTS_PAGE } from './routes';
import ProductPage from './pages/ProductPage';
import SearchPage from './pages/SearchPage';
import CategoryProductsPage from './pages/CategoryProductsPage';
import PostsPage from './pages/PostsPage';

import { ToastContainer, toast } from 'react-toastify';
import CartPage from './pages/CartPage';


function App() {
  return (
    <>
    <Routes>
    <Route path={MAIN_HOMEPAGE} element={<ProductsPage />} />
    <Route path={PRODUCT_DETAILS_PAGE} element={<ProductPage />} />
    <Route path={SEARCH_RESULTS_PAGE} element={<SearchPage />} />
    <Route path={CATEGORY_PRODUCTS_PAGE} element={<CategoryProductsPage />} />
    <Route path='posts' element={<PostsPage />} />
    <Route path={CART_PAGE} element={<CartPage />} />






    </Routes>
    <ToastContainer />

    </>
  );
}

export default App;
