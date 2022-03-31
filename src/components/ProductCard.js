import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { image, title, price, id, rating } = item;

  return (
    <div className="flex flex-col h-[500px] p-3 rounded-lg border border-gray-200 shadow-sm">
      <img
        src={image}
        alt={title}
        className="w-full h-[250px] object-cover rounded-lg mb-5 object-center"
      />
      <h3 className="mb-auto text-xl font-bold ">{title}</h3>
      <div className="flex items-center justify-between text-sm">
        <span className="text-2xl font-semibold text-red-500">{`$ ${price}`}</span>
        <span className="text-md opacity-80">Rating: {rating.rate}</span>
      </div>
      <Link
        to={`/products/${id}`}
        className="w-full px-6 py-3 mt-auto text-center text-white capitalize transition-all bg-gray-400 rounded-lg hover:bg-yellow-400"
      >
        Discover More
      </Link>
    </div>
  );
};

export default ProductCard;
