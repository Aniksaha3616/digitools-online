export default function Navbar({ cartCount, setView }) {
  return (
    <nav className="flex items-center justify-between px-40 py-4 bg-white shadow-sm ">
      
      
      <h1 className="text-3xl font-bold text-purple-600 cursor-pointer">
        DigiTools
      </h1>

      
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li
          className="hover:text-purple-600 cursor-pointer"
          onClick={() => setView("products")}
        >
          Products
        </li>
        <li className="hover:text-purple-600 cursor-pointer">Features</li>
        <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
        <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
        <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
      </ul>

      
      <div className="flex items-center gap-4">
        
        
        <button className="text-gray-700 hover:text-purple-600">
          Login
        </button>

        {/* Cart */}
        <button
          onClick={() => setView("cart")}
          className="text-gray-700 hover:text-purple-600"
        >
          🛒 ({cartCount})
        </button>

        {/* CTA */}
        <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}