import { Row, Col, Container } from "reactstrap";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Testimonial from "./Testimonial/TestimonialTypeTenth";

import Slider from "./Slider/Slider";
import classes from "./TestimonialsLayoutsTypeFourth.module.css";
import { Fade } from "react-awesome-reveal";

const strong = "FLINKEN® Beliefs";
const title = "What Makes Us Different";

class TestimonialsLayoutsTypeFourth extends Component {
    state = {
        persons: [
            {
                name: "Mision",
                post: null,
                description:
                    "We aim to continually innovate better products and improved services that will enhance the standards of living and the well being of our society. This will be achieved through deliver high-quality products to our clients and continuously strive to achieve long-term sustainability and high credentials by exceeding our client’s and employee’s expectations. We wish to achieve a rewarding environment for our people and financial prosperity through our relentless perseverance and proper management.",

                link: null,
            },
            {
                name: "Vision",
                post: null,
                description:
                    "To become the leading position in the building materials industry. In order to establish our presence as a top manufacturer of dry-mix products, we are committed to offer the most competitive product that provide optimum value to customer in diverse industry.",

                link: null,
            },
        ],
    };

    renderCards() {
        const card = this.state.persons;
        const listItems = card.map((item, index) => {
            return <Testimonial key={index} person={item.name} post={null} description={item.description} dark={this.props.dark ? true : false} link={item.link} />;
        });
        return <Slider array={listItems} dark={this.props.dark ? true : false} />;
    }

    render() {
        return (
            <div>
                <section className={`section ${classes.testimonials} ${this.props.dark ? `dark ${classes.dark}` : ""}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row className={classes.testimonialsRow}>
                                <Col lg="8" md="8" sm="10" className={`mx-auto text-center ${classes.leftColumn}`}>
                                    <Fade top triggerOnce={true}>
                                        <strong className="my-4" style={{ display: "block" }}>
                                            {strong}
                                        </strong>
                                    </Fade>
                                    <Fade top delay={100} triggerOnce={true}>
                                        <h1 className="text-center">{title}</h1>
                                    </Fade>
                                </Col>

                                <Col lg="10" md="10" sm="10" className={`mx-auto ${classes.rightColumn}`}>
                                    {this.renderCards()}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        );
    }
}

export default TestimonialsLayoutsTypeFourth;
