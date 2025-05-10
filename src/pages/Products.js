import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Smartphone', price: 599 },
  { id: 2, name: 'Laptop', price: 1299 },
  { id: 3, name: 'Headphones', price: 199 },
];

const Products = () => {
  const { addToCart } = useCart();

  return (
    <div className="products-grid">
      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
          onAddToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default Products;