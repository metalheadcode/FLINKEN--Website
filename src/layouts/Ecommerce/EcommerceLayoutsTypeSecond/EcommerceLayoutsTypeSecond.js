import React from "react";
import { Container, Col, Row, ListGroupItem, ListGroup } from "reactstrap";
import Ecommerce from "./Card/EcommerceTypeSecond";
import Button from "../../../components/Button/Button";
import { Fade } from "react-awesome-reveal";
import classes from "./EcommerceLayoutsTypeSecond.module.css";

function EcommerceLayoutsTypeSecond(props) {
    const { title, description, price, poster, bigPoster, category, link, features, rating } = props.product;
    const promo = "Estimated to ship 1 business day after payment confirmation.";

    return (
        <section
            className={`section ${classes.ecommerce} ${props.dark ? `dark ${classes.dark}` : ""}`}
            style={{
                backgroundImage: `url(${bigPoster})`,
                backgroundSize: "cover",
                backgroundPosition: "calc(50% / 5600 * 100%) calc(50% / 3736 * 100%)",
                height: "100vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Container>
                <Row>
                    <Col lg="7" md="5" className="ml-auto"></Col>
                    <Col lg="5" md="7" className="ml-auto">
                        <div className={classes.gridWrapper}>
                            <Fade triggerOnce={true}>
                                <Ecommerce
                                    badgeText="SALE"
                                    rating={rating}
                                    title={title}
                                    description={description}
                                    dark={props.dark ? true : false}
                                    firstList={
                                        <ListGroup className="list-group-flush">
                                            {features.slice(0, 3).map((feature, index) => (
                                                <ListGroupItem key={index}>{feature}</ListGroupItem>
                                            ))}
                                        </ListGroup>
                                    }
                                    secondList={
                                        <ListGroup className="list-group-flush">
                                            {features.slice(3, 6).map((feature, index) => (
                                                <ListGroupItem key={index}>{feature}</ListGroupItem>
                                            ))}
                                        </ListGroup>
                                    }
                                    price={price}
                                    firstButton={
                                        <Button
                                            link={true}
                                            to={`https://wa.me/60168566122?text=I%20would%20like%20to%20know%20more%20about%20${title}`}
                                            classes={"primary big simple outline w-100"}
                                            value={"WhatsApp"}
                                        />
                                    }
                                    secondButton={
                                        <Button
                                            link={true}
                                            to="https://drive.google.com/file/d/1gPpV1GGKDNnPGSGP382iTtpGcb82otiZ/view?usp=sharing"
                                            classes={"primary big simple w-100"}
                                            value={"Product Sheet"}
                                        />
                                    }
                                    promo={promo}
                                />
                            </Fade>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default EcommerceLayoutsTypeSecond;
