import React from "react";
import { Col, Row } from "reactstrap";
import Feature from "../Feature/FeatureTypeFourth";
import { Assigment, Bookmark, Email } from "../../../../components/Icons/Icons";
import Oval from "../../../../components/Frame/Frame";
import { Fade } from "react-awesome-reveal";
import classes from "./features.module.css";

const Features = (props) => {
    return (
        <React.Fragment>
            <Row className={classes.featuresRow}>
                <Col lg="4" md="6" className={classes.feature}>
                    <Fade top delay={150} triggerOnce={true}>
                        <Feature
                            title={"Research & Development"}
                            description={
                                "Our R&D colleagues work together with one another and scientific/industrial research institutes to help resolve difficulties and fulfil the most confounded client demands."
                            }
                        >
                            <Oval variant={"normal"}>
                                <Bookmark />
                            </Oval>
                        </Feature>
                    </Fade>
                </Col>
                <Col lg="4" md="6" className={classes.feature}>
                    <Fade top delay={200} triggerOnce={true}>
                        <Feature
                            title={"Marketing & Sales"}
                            description={"Well understood and communicated properly with the client requirements (inquiries & orders) carefully to ensure providing the best service to the clients."}
                        >
                            <Oval variant={"normal"}>
                                <Email />
                            </Oval>
                        </Feature>
                    </Fade>
                </Col>
                <Col lg="4" md="6" className={classes.feature}>
                    <Fade top delay={250} triggerOnce={true}>
                        <Feature title={"Engineering & Manufacture"} description={"Expertise in the performance dry-mix design which are tailor made specific for very demanding requirements."}>
                            <Oval variant={"normal"}>
                                <Assigment />
                            </Oval>
                        </Feature>
                    </Fade>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Features;
