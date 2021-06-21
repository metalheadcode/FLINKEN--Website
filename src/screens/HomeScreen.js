import React, { useContext } from "react";
import EcommerceLayoutsTypeFourteenth from "../layouts/Ecommerce/EcommerceLayoutsTypeFourteenth/EcommerceLayoutsTypeFourteenth";
import FormsLayoutsTypeFirst from "../layouts/FormsLayouts/FormsLayoutsTypeFirst/FormsLayoutsTypeFirst";
import TestimonialsLayoutsTypeFifth from "../layouts/TestimonialsLayouts/TestimonialsLayoutsTypeFifth/TestimonialsLayoutsTypeFifth";
import products from "../data/products";
import HeroLayoutsTypeFifth from "../layouts/HeroLayouts/HeroLayoutsTypeFifth";
import PortfolioLayoutsTypeSixth from "../layouts/PortfolioLayouts/PortfolioLayoutsTypeSixth/PortfolioLayoutsTypeSixth";
import FlinkenContext from "../context/flinkenContext";

const HomeScreen = (props) => {
    const flinkenContext = useContext(FlinkenContext);
    const { dark } = flinkenContext;

    return (
        <>
            <HeroLayoutsTypeFifth dark={dark} />
            <EcommerceLayoutsTypeFourteenth products={products} dark={dark} />
            <PortfolioLayoutsTypeSixth dark={dark} />
            <TestimonialsLayoutsTypeFifth dark={dark} />
            <FormsLayoutsTypeFirst dark={dark} />
        </>
    );
};

export default HomeScreen;
