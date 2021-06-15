import React from "react";
import EcommerceLayoutsTypeFourteenth from "../layouts/Ecommerce/EcommerceLayoutsTypeFourteenth/EcommerceLayoutsTypeFourteenth";
import FormsLayoutsTypeFirst from "../layouts/FormsLayouts/FormsLayoutsTypeFirst/FormsLayoutsTypeFirst";
import TestimonialsLayoutsTypeFifth from "../layouts/TestimonialsLayouts/TestimonialsLayoutsTypeFifth/TestimonialsLayoutsTypeFifth";
import products from "../data/products";
import HeroLayoutsTypeFifth from "../layouts/HeroLayouts/HeroLayoutsTypeFifth";
import PortfolioLayoutsTypeSixth from "../layouts/PortfolioLayouts/PortfolioLayoutsTypeSixth/PortfolioLayoutsTypeSixth";

const HomeScreen = (props) => {
    return (
        <>
            <HeroLayoutsTypeFifth />
            <EcommerceLayoutsTypeFourteenth products={products} />
            <PortfolioLayoutsTypeSixth />
            <TestimonialsLayoutsTypeFifth />
            <FormsLayoutsTypeFirst />
        </>
    );
};

export default HomeScreen;
