import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import TeamLayoutsTypeEleventh from "../layouts/TeamLayout/TeamLayoutsTypeEleventh/TeamLayoutsTypeEleventh";
import { Link } from "react-router-dom";
import TestimonialsLayoutsTypeFourth from "../layouts/TestimonialsLayouts/TestimonialsLayoutsTypeFourth/TestimonialsLayoutsTypeFourth";
import { Fade } from "react-awesome-reveal";
import FeaturesLayoutsTypeTwenty from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeTwenty/FeaturesLayoutsTypeTwenty";
import FeaturesLayoutsTypeFourth from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeFourth/FeaturesLayoutsTypeFourth";

const AboutUs = (props) => {
    return (
        <>
            <Container>
                <Row className="my-5">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                </Row>
            </Container>
            <FeaturesLayoutsTypeFourth />
            <section
                className="section"
                style={{
                    backgroundImage: "url(https://res.cloudinary.com/metalheadcoder/image/upload/v1623902013/FLINKEN%C2%AE%20Website/flinken-members-min_erxoto.png)",
                    height: "350px",
                    width: "auto",
                    objectFit: "cover",
                }}
            ></section>
            <Container>
                <section className="section">
                    <Row className="m-auto justify-content-center">
                        <Col>
                            <Fade top triggerOnce={true}>
                                <strong className="my-4 text-center" style={{ display: "block" }}>
                                    About Us
                                </strong>
                            </Fade>
                            <h1 className="display-1 my-4 text-center">Driven By Innovation</h1>
                            <Row>
                                <Col>
                                    <p className="description text-left">
                                        Flin Ken Group Sdn Bhd was incorporated in 2018. Its head office is in Kuching, and its factory is located in Bintawa, Kuching Sarawak. The core of the
                                        organization is a team of experience specialists who share a common vision in bringing values to benefit all stakeholders. This vision drives our every action
                                        and decision to guarantee that we produce high-quality dry-mix mortars that are align with the rapid construction needs. In an era of rapidly growth, the
                                        construction industry is searching for safer, faster and cost effective ways of building. Simultaneously, building owners wish to keep the maintenance cost at
                                        the lowest. Consequently, our team aim to solve these concerns by producing a ready mix mortar. Our organization has put effort into a full integrated
                                        production line to reduce waste with the final objective which is fulfilling the increasing demand of dry-mix mortar. The production plant is furnished with
                                        silica sand drying and partition facilities, high proficiency blending tower, a completely mechanized packing line, and stretch hood packaging for more
                                    </p>
                                </Col>
                                <Col>
                                    <p className="description text-left">
                                        exhaustive quality control and greater cost-effectiveness. exhaustive quality control and greater cost-effectiveness. Our organization has industry-driving
                                        understanding and skill to design and deliver different dry-mix mortar for different application. Furthermore, consistent with our strict quality policy, we
                                        have invested substantially in enhancing our production facilities and placing great emphasis on research & development (R&D) to produce high quality dry-mix
                                        mortar in the industry. Flinken dry-mix mortar series is known for its premium performance that has consistent quality and easy to use. This will empower our
                                        clients to work quicker, smarter, and perform better. Flinken currently is enjoying a commendable market share of the local mortar industry in Malaysia. Flinken
                                        is supported by a wide network of distributors and dealers throughout Sarawak. We take pride in our delivery, thus our clients can always be assured that only
                                        the qualified products are providing to them, all the time.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
            </Container>
            <FeaturesLayoutsTypeTwenty />

            <TestimonialsLayoutsTypeFourth />
            <TeamLayoutsTypeEleventh />
        </>
    );
};

export default AboutUs;
