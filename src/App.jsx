import { useState } from "react";
import { products } from "./data/products";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

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
      

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 my-6">
        <button onClick={() => setView("products")} className="btn btn-primary">
          Products
        </button>
        <button onClick={() => setView("cart")} className="btn btn-secondary">
          Cart
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
