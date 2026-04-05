import { useState } from "react";

export default function ProductCard({ product, addToCart }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setAdded(true);
  };

  return (
    <div className="card bg-base-200 shadow-xl p-4">
      <div className="text-3xl">{product.icon}</div>
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>{product.description}</p>

      <span className={`badge ${product.tagType}`}>{product.tag}</span>

      <ul className="my-2">
        {product.features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      <p className="font-bold">${product.price} / {product.period}</p>

      <button
        onClick={handleClick}
        className="btn btn-primary mt-2"
      >
        {added ? "Added ✅" : "Buy Now"}
      </button>
    </div>
  );
}