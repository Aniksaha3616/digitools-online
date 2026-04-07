import { useState } from "react";

export default function ProductCard({ product, addToCart }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setAdded(true);
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-md p-6 w-full max-w-sm border hover:shadow-lg transition-all duration-300">

      {/* Badge */}
      {product.tag && (
        <span
          className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-medium ${product.tagType}`}
        >
          {product.tag}
        </span>
      )}

      {/* Icon Image */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-4 overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-6 h-6 object-contain"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">
        {product.name}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-1">
        {product.description}
      </p>

      {/* Price */}
      <p className="text-2xl font-bold mt-4 text-gray-900">
        ${product.price}
        <span className="text-sm font-normal text-gray-500">
          /{product.period}
        </span>
      </p>

      {/* Features */}
      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-green-500">✔</span> {f}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={handleClick}
        className="mt-6 w-full py-2 rounded-full text-white font-medium bg-linear-to-r from-purple-500 to-indigo-500 hover:opacity-90 transition"
      >
        {added ? "Added ✅" : "Buy Now"}
      </button>
    </div>
  );
}