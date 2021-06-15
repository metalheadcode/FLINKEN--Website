import React, { useState } from "react";
import "./Base-Switcher.css";
import { Switch } from "antd";

const BaseSwitch = ({ classes, left, right, color }) => {
    const [darkSwitch, setDarkSwitch] = useState(false);
    console.log(darkSwitch);
    return (
        <div className={`Base-Switch ${classes}`}>
            <div className="wrapper">
                <div className="left">
                    <p className="text">{left}</p>
                </div>
                <div className="middle">
                    <Switch
                        onChange={(boolean) => {
                            setDarkSwitch(boolean);
                        }}
                    />
                </div>
                <div className="right">
                    <p className="text">{right}</p>
                </div>
            </div>
        </div>
    );
};

export default BaseSwitch;
