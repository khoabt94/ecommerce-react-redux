import React, { Fragment } from "react";
import { Banner } from "../components/index";
import { ProductList } from "../pages/index";

const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <ProductList simplified></ProductList>
    </Fragment>
  );
};

export default HomePage;
