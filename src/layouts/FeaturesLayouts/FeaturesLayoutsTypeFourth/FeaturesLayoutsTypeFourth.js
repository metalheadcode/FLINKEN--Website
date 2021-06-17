import React from "react";
import classes from "./FeaturesLayoutsTypeFourth.module.css";
import { Container, Col, Row } from "reactstrap";
import Features from "./Features/Features";
import { Fade } from "react-awesome-reveal";

const title = "Push Local Product To A New Quality Benchmark";
const description =
    "Flinken has the option to attract some of the most talented experts in the business. Employees are empowered in their decisions and everyone of them has taken an interest in their particular ways to saving the innovative soul that characterizes the organization and transforming the organization into the thriving industry.";
const placeholder = "https://res.cloudinary.com/metalheadcoder/image/upload/v1623909786/FLINKEN%C2%AE%20Website/pulling_test-min_wkx1f0.png";

function FeaturesLayoutsTypeFourth(props) {
    return (
        <React.Fragment>
            <section className={`section ${classes.features} ${props.dark ? `dark ${classes.dark}` : ""}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row className={classes.titleRow}>
                            <Col lg="7" md="7" className={classes.leftColumn}>
                                <Fade top triggerOnce={true}>
                                    <h1 className={`title ${classes.title}`}>{title}</h1>
                                </Fade>
                            </Col>
                            <Col lg="5" md="5" className={classes.rightColumn}>
                                <Fade top delay={50} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{description}</p>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row>
                            <Col className={classes.centerContainer}>
                                <Fade top delay={100} triggerOnce={true}>
                                    <img width="1100" height="320" src={placeholder} alt="" />
                                </Fade>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Features />
                    </Container>
                </div>
            </section>
        </React.Fragment>
    );
}
export default FeaturesLayoutsTypeFourth;
