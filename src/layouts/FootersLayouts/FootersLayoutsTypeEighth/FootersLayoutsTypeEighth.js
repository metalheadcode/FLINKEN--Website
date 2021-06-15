import React from "react";
import { Container, Col, Row } from "reactstrap";
import Divider from "../../../components/Divider/Divider";
import classes from "./FootersLayoutsTypeEighth.module.css";
import { Fade } from "react-awesome-reveal";

function FootersLayoutsTypeEighth(props) {
    return (
        <React.Fragment>
            <section className={`section  ${classes.footer} ${props.dark ? `dark ${classes.dark}` : ""}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row className={classes.headerRow}></Row>

                        <Row className={classes.dividerRow}>
                            <Col>
                                <Fade top delay={150} triggerOnce={true}>
                                    <Divider />
                                </Fade>
                            </Col>
                        </Row>
                        <Row className={classes.bottomRow}>
                            <Col className={`col-auto ${classes.col}`}>
                                <Fade top delay={200} triggerOnce={true}>
                                    <p className={classes.copyright}>Copyright © 2020 Flin Ken Group Sdn Bhd</p>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    );
}
export default FootersLayoutsTypeEighth;
