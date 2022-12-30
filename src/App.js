import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductsPage from './pages/ProductsPage';
import { CATEGORY_PRODUCTS_PAGE, MAIN_HOMEPAGE, PRODUCT_DETAILS_PAGE, SEARCH_RESULTS_PAGE } from './routes';
import ProductPage from './pages/ProductPage';
import SearchPage from './pages/SearchPage';
import CategoryProductsPage from './pages/CategoryProductsPage';
import PostsPage from './pages/PostsPage';


function App() {
  return (
    <>
    <Routes>
    <Route path={MAIN_HOMEPAGE} element={<ProductsPage />} />
    <Route path={PRODUCT_DETAILS_PAGE} element={<ProductPage />} />
    <Route path={SEARCH_RESULTS_PAGE} element={<SearchPage />} />
    <Route path={CATEGORY_PRODUCTS_PAGE} element={<CategoryProductsPage />} />
    <Route path='posts' element={<PostsPage />} />





    </Routes>

    </>
  );
}

export default App;
