import './App.css';
import Ad from './components/Ad';
import Product from './components/Product';
import { useGetProductsQuery } from './features/products/productsApiSlice';

function App() {
  const { data: products, isLoading, isSuccess, isError, error } = useGetProductsQuery()
  return (
    <>
    <div className='mx-auto h-screen container px-2 md:px-8'>
    <div className='flex md:grid flex-col md:grid-cols-4 gap-2 py-1'>
    {products?.slice(0, 3).map((product) => (
      <>
      <Product 
      title={product.title} 
      image={product.image} 
      price={product.price} 
      category={product.category} 
      rating={product.rating} />      
      </>
    ))}
    <Ad />
    </div>
    <div className='flex md:grid flex-col md:grid-cols-4 gap-2 py-1'>
    {products?.slice(3, products?.length).map((product) => (
      <>
      <Product 
      title={product.title} 
      image={product.image} 
      price={product.price} 
      category={product.category} 
      rating={product.rating} />      
      </>
    ))}
    </div>
    </div>
    </>
  );
}

export default App;
