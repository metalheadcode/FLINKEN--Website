import React, { useContext } from "react";
import { Container, Col, Row } from "reactstrap";
import { AppLogo } from "../../components/Icons/Icons";
import classes from "./HeroLayoutsTypeFifth.module.css";
import { Fade } from "react-awesome-reveal";
import FlinkenContext from "../../context/flinkenContext";
const titleText = "The New Standart In Malaysia Mortar Industry";
const descriptionText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore, ex iure id ad modi nobis iste sapiente laudantium at quod";

function HeroLayoutsTypeFifth(props) {
    const onLinksClickHandler = (event) => {
        event.preventDefault();
        let element = event.currentTarget.getBoundingClientRect();
        window.scrollTo({ bottom: element.bottom + 100, behavior: "smooth" });
    };

    return (
        <React.Fragment>
            <section
                className={`section ${classes.hero} ${props.dark ? `dark ${classes.dark}` : ""}`}
                style={{
                    backgroundImage: "url(https://res.cloudinary.com/metalheadcoder/image/upload/v1623819779/FLINKEN%C2%AE%20Website/flinken-main-page_mhk9ps.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "calc(50% / 5600 * 100%) calc(50% / 3736 * 100%)",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Container>
                    <Row className={classes.contentRow}>
                        <Col lg="8" md="8" className="mx-auto text-center">
                            <Fade top delay={50} triggerOnce={true}>
                                <a href="#" className={classes.logotype}>
                                    <AppLogo />
                                </a>
                            </Fade>
                            <Fade top delay={100} triggerOnce={true}>
                                <h1 className={classes.title}>{titleText}</h1>
                            </Fade>
                            <Fade top delay={150} triggerOnce={true}>
                                <p className={`normal-text ${classes.description}`}>{descriptionText}</p>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}
export default HeroLayoutsTypeFifth;
