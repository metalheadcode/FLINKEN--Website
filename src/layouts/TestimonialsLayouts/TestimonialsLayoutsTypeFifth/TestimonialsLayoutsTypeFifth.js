import { Row, Col, Container } from "reactstrap";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Testimonial from "./Testimonial/TestimonialTypeFifth";
import { Google, LinkedIn, Twitter, User } from "../../../components/Icons/Icons";

import { Avatar } from "antd";
import Slider from "./Slider/Slider";
import classes from "./TestimonialsLayoutsTypeFifth.module.css";

class TestimonialsLayoutsTypeFifth extends Component {
    state = {
        persons: [
            {
                name: "Mad Qarzy Mad Rozy",
                post: "Contractor",
                description: "Bagus dan mudah utk atur mozek tak perlu pakai gam mozek. Flinken murah,mudah, tak perlu longgokan pasir, dah siap gam harga dr kilang dan tambang yg murah",
                avatar: "https://images.unsplash.com/photo-1535213679542-f42b6f164647?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80",
                stars: 4,
                link: "./some-link",
            },
            {
                name: "Long Sty",
                post: "Homestay & Restaurant Owner",
                description: "Easy to work, clean workplace… no extra cement and sand need",
                avatar: "https://images.unsplash.com/photo-1551861568-c0afa6653bc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80",
                stars: 4,
                link: "./some-link",
            },
        ],
    };

    renderCards() {
        const card = this.state.persons;
        const listItems = card.map((item, index) => {
            return (
                <Testimonial
                    key={index}
                    person={item.name}
                    post={item.post}
                    description={item.description}
                    stars={item.stars}
                    dark={this.props.dark ? true : false}
                    link={item.link}
                    avatar={
                        item.avatar ? (
                            <Avatar shape="square" size={80} src={item.avatar} />
                        ) : (
                            <Avatar
                                shape="square"
                                size={80}
                                icon={<User fill={"#ffffff"} />}
                                style={{
                                    fontSize: 0,
                                    backgroundColor: "#345DEE",
                                }}
                            />
                        )
                    }
                />
            );
        });
        return <Slider array={listItems} dark={this.props.dark ? true : false} />;
    }

    render() {
        return (
            <div>
                <section className={`section ${classes.testimonials} ${this.props.dark ? `dark ${classes.dark}` : ""}`}>
                    <Container>
                        <Row className={classes.testimonialsRow}>
                            <Col className="p-0">{this.renderCards()}</Col>
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default TestimonialsLayoutsTypeFifth;
