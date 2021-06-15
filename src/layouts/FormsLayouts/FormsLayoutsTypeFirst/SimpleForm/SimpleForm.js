import React from "react";
import { Form } from "react-bootstrap";
import { Col } from "reactstrap";
import { EmailIcon, Phone, UserIcon } from "../../../../components/Icons/Icons";
import Button from "../../../../components/Button/Button";
import classes from "./SimpleForm.module.css";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import "antd/dist/antd.css";

const SimpleForm = (props) => {
    return (
        <React.Fragment>
            <Form className={classes.form} action="https://echo.htmlacademy.ru" method="post">
                <Form.Row className="d-flex justify-content-center">
                    <Col lg="3" md="12" className="mx-3">
                        <Button type={"submit"} classes={"primary large simple w-100 px-4"} value="Facebook" link={true} to="https://www.facebook.com/flinken.com.my/" />
                    </Col>
                    <Col lg="3" md="12" className="mx-3">
                        <Button
                            type={"submit"}
                            classes={"neutral large simple w-100 px-4"}
                            style={{ backgroundColor: "#25D366" }}
                            value="WhatsApp"
                            link={true}
                            to="https://wa.me/60168566122?text=I%20would%20like%20to%20know%20more%20about%20FLINKEN®%20Product"
                        />
                    </Col>
                </Form.Row>
            </Form>
        </React.Fragment>
    );
};

export default SimpleForm;
