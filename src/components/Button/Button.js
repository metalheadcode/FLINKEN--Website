import React from "react";
import "./Button.css";

const Button = ({ link, classes, size, onClick, radius, leftIcon, rightIcon, value, to, type }) => {
    return (
        <>
            {link === true ? (
                <a target="_blank" href={to} className={`Button ${classes} ${size}`} onClick={onClick} style={{ borderRadius: `${radius}` }}>
                    {leftIcon}
                    <span>{value}</span>
                    {rightIcon}
                </a>
            ) : (
                <button className={`Button ${classes} ${size}`} type={type} onClick={onClick} style={{ borderRadius: `${radius}` }}>
                    {leftIcon}
                    <span>{value}</span>
                    {rightIcon}
                </button>
            )}
        </>
    );
};

export default Button;
