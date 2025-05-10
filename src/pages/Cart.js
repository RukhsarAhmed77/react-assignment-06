import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cart, removeFromCart, cartTotal } = useCart();

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <span>${item.price}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <div className="cart-total">
        <h3>Total: ${cartTotal}</h3>
      </div>
    </div>
  );
};

export default Cart;