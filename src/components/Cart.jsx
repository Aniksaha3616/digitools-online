export default function Cart({ cart, removeFromCart, clearCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return <p className="text-center">Cart is empty</p>;
  }

  return (
    <div>
      {cart.map(item => (
        <div key={item.id} className="flex justify-between p-4 bg-base-200 mb-2">
          <div>
            <span className="text-2xl">{item.icon}</span>
            <p>{item.name}</p>
          </div>
          <div>
            <p>${item.price}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="btn btn-sm btn-error"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h2 className="text-xl font-bold">Total: ${total}</h2>

      <button onClick={clearCart} className="btn btn-success mt-4">
        Proceed to Checkout
      </button>
    </div>
  );
}