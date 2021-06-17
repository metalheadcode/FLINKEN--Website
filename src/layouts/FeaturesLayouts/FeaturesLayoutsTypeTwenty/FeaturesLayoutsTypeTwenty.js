import React, { Component } from "react";

import { Container, Col, Row } from "reactstrap";
import { Bookmark, Home, Basket } from "../../../components/Icons/Icons";
import Oval from "../../../components/Frame/Frame";
import Button from "../../../components/Button/Button";
import Feature from "./Feature/FeaturesTypeTwenty";
import { Fade } from "react-awesome-reveal";
import classes from "./FeaturesLayoutsTypeTwenty.module.css";

const title = "Our Value";
const description =
    "The organization is limited by its qualities and reason that amplify Excellence and Growth for its people and Value Creation for its clients and investors in the cement-based building material industry through our:";

class FeaturesLayoutsTypeTwenty extends Component {
    state = {
        renderElement: 3,
        features: [
            {
                title: "Value-Driven",
                description: "A value-driven initiative to achieve sustainable business impact and outcomes, bringing greater value to its customer and growth to the company",
                link: "#/some-link#3",
                icon: <Basket fill={"#ffffff"} />,
                id: 1,
            },
            {
                title: "Integrity",
                description: "Committed to keep our word and honour to our commitment",
                link: null,
                icon: <Bookmark fill={"#ffffff"} />,
                id: 2,
            },
            {
                title: "Innovation",
                description: "Complementing technology and innovation with its dry-mix products and solutions",
                link: "#/some-link#2",
                icon: <Home fill={"#ffffff"} />,
                id: 3,
            },
        ],
    };

    buttonClickHandler = (event) => {
        event.preventDefault();
        const card = this.state.features;
        this.setState({ renderElement: card.length });
    };

    renderCards() {
        const card = this.state.features;
        const listItems = card
            .filter((element, index) => {
                if (index < this.state.renderElement) {
                    return true;
                }
            })
            .map((item, index) => {
                return (
                    <Col lg={4} md={4} className={classes.item} key={index}>
                        <Fade down delay={`${index}0`} triggerOnce={true}>
                            <Feature title={item.title} description={item.description} link={item.link} dark={this.props.dark ? true : false}>
                                <Oval variant={"large"} color={"primary"}>
                                    {item.icon}
                                </Oval>
                            </Feature>
                        </Fade>
                    </Col>
                );
            });
        return <>{listItems}</>;
    }

    render() {
        return (
            <React.Fragment>
                <section className={`section ${classes.features} ${this.props.dark ? `dark ${classes.dark}` : ""}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row className={classes.headerRow}>
                                <Col lg={8} md={8} className="mx-auto text-center">
                                    <Fade down triggerOnce={true}>
                                        <h1 className={`${classes.title} text-center`}>{title}</h1>
                                    </Fade>
                                    <Fade down delay={50} triggerOnce={true}>
                                        <p className={`normal-text ${classes.description}`}>{description}</p>
                                    </Fade>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row className={classes.featuresRow}>{this.renderCards()}</Row>
                        </Container>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default FeaturesLayoutsTypeTwenty;
