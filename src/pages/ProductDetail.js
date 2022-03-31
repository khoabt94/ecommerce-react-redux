import React from "react";
import { Link, useParams } from "react-router-dom";
import { API, fetcher } from "../config";
import useSWR from "swr";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slice/cartSlice";

const ProductDetail = () => {
  const { productId } = useParams();
  const { data, error } = useSWR(API.baseUrl, fetcher);
  const cartList = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [{ title, category, description, image, price, rating, id }] =
    data?.filter((el) => el.id === +productId) || [];

  const handleAddToCart = () => {
    const action = addToCart({ title, image, price, quantity: 1, id });
    dispatch(action);
  };

  return (
    <div className="grid max-h-screen grid-cols-2 pt-24">
      <div className="flex justify-center p-32 ">
        <img src={image} alt={title} className="w-1/2 h-auto" />
      </div>
      <div className="flex flex-col justify-between p-32 pl-0">
        <h2 className="text-3xl text-gray-400">{category.toUpperCase()}</h2>
        <h1 className="text-5xl leading-snug">{title}</h1>
        <div className="text-xl font-bold">
          <span className="mr-2">Rating</span>
          <span>
            {rating.rate}
            <i className="ml-1 fa-solid fa-star"></i>
          </span>
        </div>
        <h1 className="text-5xl font-extrabold">{`$ ${price}`}</h1>
        <p className="text-xl font-light text-gray-400">{description}</p>
        <div className="flex gap-x-4">
          <button
            onClick={handleAddToCart}
            className="flex items-center px-8 py-3 border border-gray-800 rounded-md btn gap-x-2"
          >
            Add To Cart
          </button>
          <button className="flex items-center px-8 py-3 text-white bg-black border border-gray-800 rounded-md btn btn--black gap-x-2">
            <Link to="/cart">Go To Cart</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
