import React from "react";
import Form from "./SimpleForm/SimpleForm";
import { Container, Col, Row } from "reactstrap";
import { Facebook } from "../../../components/Icons/Icons";
import Socials from "../../../components/Socials/Socials";
import Oval from "../../../components/Frame/Frame";
import VerticalModal from "./VerticalModal/VerticalModal";
import classes from "./FormsLayoutsTypeFourth.module.css";
import PlayButton from "../../../components/Play-Button/Play-Button";
import { Fade } from "react-awesome-reveal";

function FormsLayoutsTypeFourth(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <React.Fragment>
            <section className={`${classes.form} ${props.dark ? `dark ${classes.dark}` : ""}`}>
                <Container fluid="true" className={classes.containerFluid}>
                    <div className={classes.outer}>
                        <Container>
                            <Row>
                                <Col lg={{ size: 2, offset: 2 }} md={{ size: 2, offset: 1 }} className={`${classes.leftColumn} d-flex align-items-center justify-content-center`}>
                                    <Fade down triggerOnce={true}>
                                        <PlayButton size="large" click={() => setModalShow(true)} />
                                    </Fade>
                                </Col>

                                <Col lg={{ size: 5, offset: 3 }} md={{ size: 7, offset: 2 }} className={classes.rightColumn}>
                                    <Fade triggerOnce={true}>
                                        <div className={classes.wrapper}>
                                            <Row>
                                                <Col className="col-12 d-flex justify-content-between align-items-center">
                                                    <h3>Send WhatsApp</h3>
                                                    <a href="#" className={`text-right ${classes.loginLink}`}>
                                                        Direct
                                                    </a>
                                                </Col>
                                                <Col className={`col-12 ${classes.formColumn}`}>
                                                    <Form dark={props.dark ? true : false} />
                                                </Col>
                                                <Col className={`col-12 ${classes.socialsColumn}`}>
                                                    <p className={`small-text ${classes.smallText} text-center`}>Or you can call our Sales Representative for more info at 016 - 856 6122</p>
                                                    <Row className={`${classes.linksRow} justify-content-center`}>
                                                        <Socials dark={props.dark ? true : false}>
                                                            <a target="_blank" href="https://www.facebook.com/flinken.com.my/">
                                                                <Oval variant="normal">
                                                                    <Facebook />
                                                                </Oval>
                                                            </a>
                                                        </Socials>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Fade>
                                </Col>
                            </Row>
                            <VerticalModal dark={props.dark ? true : false} show={modalShow} onHide={() => setModalShow(false)} />
                        </Container>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    );
}
export default FormsLayoutsTypeFourth;
