import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../slice/cartSlice";
import { selectProducts } from "../app/selectors";

const ProductDetail = () => {
  const { productId } = useParams();

  const listProducts = useSelector(selectProducts);

  const dispatch = useDispatch();

  const [{ title, category, description, image, price, rating, id }] =
    listProducts?.filter((el) => el.id === +productId) || [];

  const handleAddToCart = () => {
    const action = cartAction.addToCart({
      title,
      image,
      price,
      quantity: 1,
      id,
    });
    dispatch(action);
  };

  return (
    <div className="grid max-h-screen grid-cols-1 pt-32 page-container md:grid-cols-2 lg:pt-48">
      <div className="flex justify-center max-h-[400px] md:max-h-[500px] w-3/4 mx-auto">
        <img src={image} alt={title} className="object-contain w-full h-full" />
      </div>
      <div className="flex flex-col gap-y-6 lg:gap-y-8">
        <h2 className="mt-8 text-2xl text-gray-400 lg:text-3xl md:mt-0">
          {category.toUpperCase()}
        </h2>
        <h1 className="text-4xl leading-snug lg:text-5xl">{title}</h1>
        <div className="text-lg font-bold lg:text-xl">
          <span className="mr-2">Rating</span>
          <span>
            {rating.rate}
            <i className="ml-1 fa-solid fa-star"></i>
          </span>
        </div>
        <h1 className="text-4xl font-extrabold lg:text-5xl">{`$ ${price}`}</h1>
        <p className="text-xl font-light text-gray-400">
          {description.substring(0, 150)}
        </p>
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
