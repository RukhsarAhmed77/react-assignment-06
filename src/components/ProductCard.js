const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={`https://picsum.photos/400/300?random=${product.id}`} 
          alt={product.name}
          className="product-img"
        />
      </div>
      <div className="product-content">
        <h3>{product.name}</h3>
        <p className="product-description">Premium quality product with lifetime warranty</p>
        <p className="product-price">${product.price}</p>
        <button 
          onClick={() => onAddToCart(product)}
          className="add-to-cart-btn"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;