import { Col } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../components/index";
import {
  errorProducts,
  loadingProducts,
  selectProducts,
} from "../app/selectors";
import { productsAction } from "../slice/productSlice";
import SkeletonLoading from "../components/SkeletonLoading";

const ProductList = ({ simplified }) => {
  const [filteredList, setFilterList] = useState([]);
  const [filterredTerm, setFilterTerm] = useState("");

  const dispatch = useDispatch();

  const listProducts = useSelector(selectProducts);
  const isError = useSelector(errorProducts);
  const isLoading = useSelector(loadingProducts);

  useEffect(() => {
    setFilterList(listProducts);
  }, [listProducts]);

  useEffect(() => {
    dispatch(productsAction.getProducts());
  }, [dispatch]);

  const cateList = [...new Set(listProducts?.map((el) => el.category))].map(
    (el) => `${el[0].toUpperCase()}${el.slice(1)}`
  );

  const handleChipClick = (value) => {
    const searchTerm = value === filterredTerm ? "" : value;
    const newData = listProducts.filter((el) =>
      el.category.includes(searchTerm.toLowerCase())
    );
    console.log(newData);
    setFilterTerm(searchTerm);
    setFilterList(newData);
  };

  if (isError) return <div>Failed to load</div>;

  return (
    <Fragment>
      <div
        className={`${
          simplified ? "lg:pt-32 pt-16" : "pt-32"
        } pb-5 page-container`}
      >
        <h2 className="py-3 mb-5 text-3xl font-bold text-center border-b-2 border-gray-300 lg:py-5 lg:mb-10 lg:text-5xl">
          Latest Products
        </h2>

        <div className="flex flex-wrap justify-center gap-4 ">
          {cateList.length > 0 &&
            !simplified &&
            cateList.map((el, index) => (
              <span
                key={index}
                onClick={() => handleChipClick(el)}
                className={`flex-shrink-0 chip cursor-pointer px-4 py-2 border border-gray-400 rounded-md ${
                  filterredTerm === el
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {el}
              </span>
            ))}
        </div>

        {isLoading ? (
          <div className="grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col h-[500px] p-3 rounded-lg border gap border-gray-200 shadow-sm">
              <SkeletonLoading height="250px" radius="8px" />
            </div>
            <div className="flex flex-col h-[500px] p-3 rounded-lg border border-gray-200 shadow-sm">
              <SkeletonLoading height="250px" radius="8px" />
            </div>
            <div className="flex flex-col h-[500px] p-3 rounded-lg border border-gray-200 shadow-sm">
              <SkeletonLoading height="250px" radius="8px" />
            </div>
            <div className="flex flex-col h-[500px] p-3 rounded-lg border gap border-gray-200 shadow-sm">
              <SkeletonLoading height="250px" radius="8px" />
            </div>
            <div className="flex flex-col h-[500px] p-3 rounded-lg border border-gray-200 shadow-sm">
              <SkeletonLoading height="250px" radius="8px" />
            </div>
            <div className="flex flex-col h-[500px] p-3 rounded-lg border border-gray-200 shadow-sm">
              <SkeletonLoading height="250px" radius="8px" />
            </div>
          </div>
        ) : (
          <div className="grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-3">
            {simplified
              ? filteredList?.slice(0, 8).map((el) => (
                  <Col
                    xs={24}
                    sm={12}
                    lg={6}
                    className="crypto-card"
                    key={el.id}
                  >
                    <ProductCard item={el}></ProductCard>
                  </Col>
                ))
              : filteredList?.map((el) => (
                  <Col
                    xs={24}
                    sm={12}
                    lg={6}
                    className="crypto-card"
                    key={el.id}
                  >
                    <ProductCard item={el}></ProductCard>
                  </Col>
                ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ProductList;
