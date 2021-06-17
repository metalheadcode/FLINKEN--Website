import React from "react";
import { Form } from "react-bootstrap";
import { Col } from "reactstrap";
import { Select } from "antd";
import { EmailIcon, UserIcon } from "../../../../components/Icons/Icons";
import Button from "../../../../components/Button/Button";
import "antd/dist/antd.css";
import { Checkbox } from "antd";
import classes from "./SimpleForm.module.css";
import CustomInput from "../../../../components/CustomInput/CustomInput";
/**
 *
 * label = boolean
 * leftIcon = boolean
 * rightIcon = boolean
 * formSimple = boolean
 * textarea = boolean
 */
const SimpleForm = (props) => {
    return (
        <React.Fragment>
            <Form className={classes.form}>
                <Form.Row>
                    <CustomInput
                        classes={`col-12 ${classes.p15} ${classes.item} ${props.classes}`}
                        controlId="FormInputName"
                        name="name"
                        dark={props.dark == true ? true : null}
                        placeholder="Name"
                        simple={false}
                        leftIcon={true}
                        icon={<UserIcon />}
                    />

                    <Form.Group className="pb-3">
                        <Select placeholder="Select Products" className={`w-100 big ${props.dark ? `dark ${classes.dark}` : ""}`} name="name">
                            <Option value="GP Based Coat">GP Based Coat</Option>
                            <Option value="GP Thin Plaster">GP Thin Plaster</Option>
                            <Option value="GP Based Coat">GP Based Coat</Option>
                            <Option value="TA C1">TA C1</Option>
                            <Option value="TA C2">TA C2</Option>
                            <Option value="TA Excel Bond">TA Excel Bond</Option>
                            <Option value="SE Non Shrink Grout">SE Non Shrink Grout</Option>
                            <Option value="All Products">All Products</Option>
                        </Select>
                    </Form.Group>

                    <CustomInput
                        classes={`col-12 ${classes.p15} ${classes.item} ${props.classes}`}
                        controlId="TextMessage"
                        name="message"
                        dark={props.dark == true ? true : null}
                        placeholder="Message"
                        simple={false}
                        textarea={true}
                        rows={3}
                    />
                </Form.Row>
                <Form.Row>
                    <Col className={classes.p20}>
                        <Checkbox>By sending this form, you agree for us to keep this number for promotion purpose</Checkbox>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col className={`col-12 ${classes.p20}`}>
                        <Button type={"submit"} classes={"primary large simple w-100"} value={"Send"} link={true} to="https://wasap.my/60168566122" />
                    </Col>
                </Form.Row>
            </Form>
        </React.Fragment>
    );
};

export default SimpleForm;
