import React from "react"
import classes from "./FeaturesLayoutsTypeFourth.module.css"

import { Container, Col, Row } from "reactstrap"

import placeholder from "../../../img/placeholder-gray.png"
import placeholderDark from "../../../img/placeholder-gray-dark.png"
import { Fade } from "react-awesome-reveal"

const title = "Hey, do you know also got physical store? 🤔"
const description =
  "Visit our distributors and they will help you choose the best package suite your needs. 😉"

const FeaturesLayoutsTypeFourth = (props) => {
  return (
    <section
      className={`section ${classes.features} ${
        props.dark ? `dark ${classes.dark}` : ""
      }`}
    >
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
                <p className={`normal-text ${classes.description}`}>
                  {description}
                </p>
              </Fade>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col className={classes.centerContainer}>
              {props.dark === true ? (
                <>
                  <Fade top delay={100} triggerOnce={true}>
                    <img
                      width="1100"
                      height="320"
                      src={placeholderDark}
                      alt=""
                    />
                  </Fade>
                </>
              ) : (
                <>
                  <Fade top delay={100} triggerOnce={true}>
                    <img width="1100" height="320" src={placeholder} alt="" />
                  </Fade>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}
export default FeaturesLayoutsTypeFourth
