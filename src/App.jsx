import { useState } from "react";
import { products } from "./data/products";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductCard from "./components/ProductCard";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Added to cart");
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Removed from cart");
  };

  const clearCart = () => {
    setCart([]);
    toast.info("Checkout complete");
  };

  return (
    <>
      <Navbar cartCount={cart.length} setView={setView} />

      <Banner />
      <Stats/>

        <div className="text-center mb-8 mt-3 pt-5">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Your Shopping Cart
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your selected digital tools
          </p>

          

        </div>
      

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 my-6">
        <button onClick={() => setView("products")} className="btn px-5 py-2 rounded-full border text-gray-600 hover:border-purple-600 hover:text-purple-600 transition">
          Products
        </button>
        <button onClick={() => setView("cart")} className="btn px-5 py-2 rounded-full bg-purple-600 text-white shadow">
          Cart({cart.length})
        </button>
      </div>

      {/* Main Section */}
      <div className="container mx-auto px-4">
        {view === "products" ? (
          <div className="grid md:grid-cols-3 gap-6">
            {products.map(p => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
          </div>
        ) : (
          <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
        )}
      </div>
      <Steps />
      <Pricing />
      <Footer/>

      <ToastContainer />
    </>
  );
}

export default App;
