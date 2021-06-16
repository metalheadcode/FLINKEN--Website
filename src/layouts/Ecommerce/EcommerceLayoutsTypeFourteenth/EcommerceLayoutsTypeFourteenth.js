import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Row, Col, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Button, ButtonGroup } from "react-bootstrap";
import "../../../components/Tabs/Tabs.css";
import TextButton from "../../../components/Text-Button/Text-Button"; // button jenis
import Oval from "../../../components/Frame/Frame"; // button see more ke kanan
import { RightArrow } from "../../../components/Icons/Icons";
import Ecommerce from "./Ecommerce/EcommerceTypeFourteenth";
import classes from "./EcommerceLayoutsTypeFourteenth.module.css";

const categories = ["GP Series", "TA Series", "SE Series"];

const EcommerceLayoutsTypeFourteenth = ({ dark, products }) => {
    // ni bagi identify current state
    const [activeCategory, setActiveCategory] = useState("gp-series");
    const [postDisplayNumber, setPostDisplayNumber] = useState(3);
    const [seeMoreBtn, setSeeMoreBtn] = useState(false);

    const basePath = "../../../../public/image/flinken-product-01.png";

    const onClickCategory = (event) => {
        setActiveCategory(event.target.value);
        setPostDisplayNumber(3);
    };

    const onClickSeeMore = (event) => {
        console.log("onClickSeeMore");
        setPostDisplayNumber(event.target.value);
        setSeeMoreBtn(false);
    };

    const convertNameTitle = (name) => {
        const newName = name.toUpperCase().replace(/-/g, " ");
        return newName;
    };

    const convertName = (name) => {
        const newName = name.toLowerCase().replace(/ /g, "-");
        return newName;
    };

    const onLinksClickHandler = (event, string) => {
        event.preventDefault();
        Array.from(event.target.parentNode.childNodes).forEach((item) => {
            item.classList.remove("active");
        });
        event.target.classList.add("active");
    };

    useEffect(() => {
        if (products.filter((product) => product.category === activeCategory).length > 3) {
            setSeeMoreBtn(true);
        }
    }, [products, activeCategory]);

    return (
        <section className={`section ${classes.ecommerce} ${dark ? `dark ${classes.dark}` : ""}`}>
            <div className={classes.gridWrapper}>
                <Container>
                    <Row>
                        <Col lg="12" md="12">
                            <Fade down triggerOnce={true}>
                                <strong style={{ display: "block" }}>FLINKEN®</strong>
                            </Fade>
                        </Col>
                    </Row>

                    <Row className={classes.tabsRow}>
                        <Col lg="5" md="6">
                            <Fade down delay={50} triggerOnce={true}>
                                <h1 className="text-left">{convertNameTitle(activeCategory)}</h1>
                            </Fade>
                        </Col>
                        <Col lg="6" md="6" className="ml-auto d-flex align-items-center">
                            <div style={{ width: "100%" }}>
                                <Fade down delay={50} triggerOnce={true}>
                                    <ButtonGroup className={`Tabs-group ${classes}`} onClick={onLinksClickHandler}>
                                        {categories.map((item, index) => (
                                            <Button key={index} className={`Tabs-item ${index === 0 ? "active" : null}`} onClick={onClickCategory} value={convertName(item)}>
                                                {item}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </Fade>
                            </div>
                        </Col>
                    </Row>

                    <Col>
                        <Row className={classes.ecommerceRow}>
                            {postDisplayNumber === 3
                                ? products
                                      .filter((p) => p.category === activeCategory)
                                      .slice(0, 3)
                                      .map((product, index) => (
                                          <Ecommerce
                                              key={product._id}
                                              dark={dark}
                                              link={`/products/${product._id}`}
                                              poster={product.poster}
                                              rating={product.rating}
                                              title={product.title}
                                              price={product.price}
                                          />
                                      ))
                                : products
                                      .filter((p) => p.category === activeCategory)
                                      .map((product) => (
                                          <Ecommerce
                                              key={product._id}
                                              dark={dark}
                                              link={`/products/${product._id}`}
                                              poster={product.poster}
                                              rating={product.rating}
                                              title={product.title}
                                              price={product.price}
                                          />
                                      ))}
                        </Row>
                    </Col>

                    <Row className={classes.buttonRow}>
                        <Col lg={8} md={8} className="mx-auto d-flex justify-content-center">
                            {seeMoreBtn && (
                                <TextButton position={"right"} text={"See More"} onClick={onClickSeeMore} value={products.filter((p) => p.category === activeCategory).length}>
                                    <Oval variant={"small"}>
                                        <RightArrow />
                                    </Oval>
                                </TextButton>
                            )}
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default EcommerceLayoutsTypeFourteenth;
