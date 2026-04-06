export default function Cart({ cart, removeFromCart, clearCart,  }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        


        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Your Cart</h2>

          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Cart is empty</p>
          ) : (
            <>
              
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-4 rounded-lg border hover:shadow-sm transition"
                  >
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-6 h-6 object-contain"
                        />
                      </div>

                      <p className="font-medium text-gray-700">
                        {item.name}
                      </p>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-6">
                      <p className="font-semibold text-gray-800">
                        ${item.price}
                      </p>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mt-8 border-t pt-4">
                <h3 className="text-lg font-semibold">Total</h3>
                <p className="text-xl font-bold text-purple-600">
                  ${total}
                </p>
              </div>

              {/* Checkout */}
              <button
                onClick={clearCart}
                className="w-full mt-6 bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition"
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}