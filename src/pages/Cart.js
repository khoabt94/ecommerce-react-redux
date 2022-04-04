import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartSelector } from "../app/selectors";
import { cartAction } from "../slice/cartSlice";

const Cart = () => {
  const cartList = useSelector(cartSelector);
  const dispatch = useDispatch();
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const sumCart = cartList.reduce((acc, el) => acc + el.price * el.quantity, 0);

  const handleIncreaseClick = (id) => {
    const action = cartAction.increaseItem(id);
    dispatch(action);
  };
  const handleDecreaseClick = (id) => {
    const action = cartAction.decreaseItem(id);
    dispatch(action);
  };
  const handlePayment = () => {
    setSubmitting(true);
    setTimeout(() => {
      const action = cartAction.clearCart();
      dispatch(action);
      setSubmitting(false);
      navigate("/");
    }, 5000);
  };

  return (
    <div className="flex flex-col pt-16 pb-20 lg:pt-32 page-container gap-y-10">
      <h2 className="py-5 text-5xl font-bold text-center border-b-2 border-gray-300">
        Your Cart
      </h2>
      <div className="flex flex-col w-full mx-auto lg:w-3/4 gap-y-6">
        {submitting ? (
          <h2 className="py-5 text-xl italic font-bold text-center">
            Your order is processed. You will be redirect to HomePage when we
            finished
          </h2>
        ) : (
          cartList.map((el, index) => (
            <CartItem
              key={index}
              item={el}
              onIncreaseClick={handleIncreaseClick}
              onDecreaseClick={handleDecreaseClick}
            />
          ))
        )}
      </div>
      <div className="flex flex-col-reverse w-full gap-10 mx-auto lg:flex-row lg:w-3/4">
        <button
          type="submit"
          className="flex items-center justify-center flex-1 px-4 py-5 border border-gray-400 rounded-md btn gap-x-2"
          disabled={submitting}
          onClick={handlePayment}
        >
          {submitting ? (
            <div className="w-10 h-10 mx-auto border-4 border-t-4 border-black rounded-full border-t-transparent animate-spin"></div>
          ) : (
            <p className="text-2xl font-medium">
              <i className="mr-3 fa-regular fa-money-bill-1"></i>
              Proceed to Payment
            </p>
          )}
        </button>
        <h2 className="flex flex-col items-center justify-center flex-1 gap-2 px-4 py-5 border border-gray-400 rounded-lg shadow-sm lg:flex-row bg-slate-200">
          <p className="text-xl lg:text-2xl">Your Cart Value: </p>
          <span className="text-2xl font-bold lg:text-3xl">
            $ {sumCart.toFixed(2)}
          </span>
        </h2>
      </div>
    </div>
  );
};

const CartItem = ({ item, onIncreaseClick, onDecreaseClick }) => {
  const { image, title, quantity, price, id } = item;
  const valueCartItem = price * quantity;
  return (
    <div className="item-cart h-[250px] border border-gray-200 shadow-sm overflow-hidden rounded-lg">
      <div className="flex items-center justify-center row-span-2 lg:row-span-1">
        <img src={image} alt="" className="object-contain w-3/5 h-full" />
      </div>
      <div className="flex flex-col p-4 justify-evenly gap-y-4">
        <p className="text-xl font-semibold leading-snug text-gray-700 lg:text-2xl">
          {title}
        </p>
        <p className="text-lg lg:text-xl">
          Price:{" "}
          <span className="ml-4 text-xl font-bold lg:text-2xl">{price}</span>
        </p>
        <div className="flex items-center gap-x-2">
          <button
            onClick={() => onDecreaseClick(id)}
            className="btn flex items-center justify-center w-[20px] h-[20px] text-xl text-gray-400 border border-gray-400 rounded-full "
          >
            <span>-</span>
          </button>
          <span className="inline-block px-2 text-lg text-gray-500 border border-gray-400 rounded ">
            {quantity}
          </span>
          <button
            onClick={() => onIncreaseClick(id)}
            className="btn flex items-center justify-center w-[20px] h-[20px] text-xl text-gray-400 border border-gray-400 rounded-full "
          >
            <span>+</span>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-1 col-start-2 bg-slate-200 lg:col-start-3">
        <p className="text-2xl font-bold tracking-wider lg:text-3xl">
          $ {valueCartItem.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
