import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductsPage from './pages/ProductsPage';
import { MAIN_HOMEPAGE, PRODUCT_DETAILS_PAGE } from './routes';
import ProductPage from './pages/ProductPage';


function App() {
  return (
    <>
    <Routes>
    <Route path={MAIN_HOMEPAGE} element={<ProductsPage />} />
    <Route path={PRODUCT_DETAILS_PAGE} element={<ProductPage />} />


    </Routes>

    </>
  );
}

export default App;
