import React, { useContext } from "react";
import EcommerceLayoutsTypeFourteenth from "../layouts/Ecommerce/EcommerceLayoutsTypeFourteenth/EcommerceLayoutsTypeFourteenth";
import EcommerceLayoutsTypeSecond from "../layouts/Ecommerce/EcommerceLayoutsTypeSecond/EcommerceLayoutsTypeSecond";
import products from "../data/products";
import FormsLayoutsTypeFirst from "../layouts/FormsLayouts/FormsLayoutsTypeFirst/FormsLayoutsTypeFirst";

const ProductDetail = ({ match }) => {
    const product = products.find((product) => product._id == match.params.id);

    return (
        <>
            <EcommerceLayoutsTypeSecond product={product} />
            <EcommerceLayoutsTypeFourteenth products={products} />
            <FormsLayoutsTypeFirst />
        </>
    );
};

export default ProductDetail;
