import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import TeamLayoutsTypeEleventh from "../layouts/TeamLayout/TeamLayoutsTypeEleventh/TeamLayoutsTypeEleventh";
import { Link } from "react-router-dom";
import TestimonialsLayoutsTypeFourth from "../layouts/TestimonialsLayouts/TestimonialsLayoutsTypeFourth/TestimonialsLayoutsTypeFourth";
import FeaturesLayoutsTypeTwenty from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeTwenty/FeaturesLayoutsTypeTwenty";
import FeaturesLayoutsTypeFourth from "../layouts/FeaturesLayouts/FeaturesLayoutsTypeFourth/FeaturesLayoutsTypeFourth";
import FlinkenContext from "../context/flinkenContext";

const AboutUs = (props) => {
    const flinkenContext = useContext(FlinkenContext);
    const { dark } = flinkenContext;
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
            <FeaturesLayoutsTypeFourth dark={dark} />
            <section
                className="section"
                style={{
                    backgroundImage: "url(https://res.cloudinary.com/metalheadcoder/image/upload/v1623902013/FLINKEN%C2%AE%20Website/flinken-members-min_erxoto.png)",
                    height: "350px",
                    width: "auto",
                    objectFit: "cover",
                }}
            ></section>
            <FeaturesLayoutsTypeTwenty dark={dark} />

            <TestimonialsLayoutsTypeFourth dark={dark} />
            <TeamLayoutsTypeEleventh dark={dark} />
        </>
    );
};

export default AboutUs;
