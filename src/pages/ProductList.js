import { Col, Row } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import { API, fetcher } from "../config";
import NavBar from "../components/NavBar";
import { ProductCard } from "../components/index";

const ProductList = ({ simplified }) => {
  const [filteredList, setFilterList] = useState([]);
  const [filterredTerm, setFilterTerm] = useState("");
  const { data, error } = useSWR(API.baseUrl, fetcher);

  useEffect(() => {
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    setFilterList(data);
  }, [data]);

  const cateList = [...new Set(data?.map((el) => el.category))].map(
    (el) => `${el[0].toUpperCase()}${el.slice(1)}`
  );

  const handleChipClick = (value) => {
    const newData = data.filter((el) => el.category === value.toLowerCase());
    setFilterTerm(value);
    setFilterList(newData);
  };

  return (
    <Fragment>
      <div className="pt-32 pb-5 page-container">
        <h2 className="py-5 mb-10 text-5xl font-bold text-center border-b-2 border-gray-300">
          Latest Products
        </h2>
        <div className="flex justify-center gap-x-4">
          {cateList.length > 0 &&
            !simplified &&
            cateList.map((el, index) => (
              <span
                key={index}
                onClick={() => handleChipClick(el)}
                className={`chip cursor-pointer px-4 py-2 border border-gray-400 rounded-md ${
                  filterredTerm === el ? "bg-black text-white" : null
                }`}
              >
                {el}
              </span>
            ))}
        </div>
        <div className="grid grid-cols-3 gap-6 py-10">
          {simplified
            ? filteredList?.slice(0, 8).map((el) => (
                <Col xs={24} sm={12} lg={6} className="crypto-card" key={el.id}>
                  <ProductCard item={el}></ProductCard>
                </Col>
              ))
            : filteredList?.map((el) => (
                <Col xs={24} sm={12} lg={6} className="crypto-card" key={el.id}>
                  <ProductCard item={el}></ProductCard>
                </Col>
              ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
