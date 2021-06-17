import React from "react";

import "./CustomInput.css";
import { Form, InputGroup } from "react-bootstrap";

const CustomInput = ({ classes, size, dark, controlId, label, leftIcon, icon, placeholder, name, rightIcon, textarea, type, simple, rows, selectType }) => {
    const formType = type || "text";
    const formSimple = simple + "" || "false";
    return (
        <Form.Group className={`CustomInput ${classes} ${size} ${dark ? `dark` : ""}`} controlId={controlId}>
            {label ? <Form.Label>{label}</Form.Label> : null}
            {leftIcon ? (
                <InputGroup className="leftIcon">
                    <InputGroup.Prepend>
                        <InputGroup.Text>{icon}</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type={type} placeholder={placeholder} name={name} required={true} />
                </InputGroup>
            ) : null}
            {rightIcon ? (
                <InputGroup className="rightIcon">
                    <Form.Control type={type} placeholder={placeholder} name={name} required={true} />
                    <InputGroup.Prepend>
                        <InputGroup.Text>{icon}</InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
            ) : null}
            {formSimple === "false" || textarea ? null : <Form.Control type={formType} placeholder={placeholder} name={name} required={true} />}

            {textarea === true ? <Form.Control as="textarea" rows={rows} name={name} placeholder={placeholder} /> : null}
        </Form.Group>
    );
};

export default CustomInput;
