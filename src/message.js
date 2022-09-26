import React, { useState } from "react";
import Input from "./input";
import "./message.css";

const Message = () => {
    const baseColor = "red";
    const [uiColor, setUiColor] = useState();
    const colorSetting = (color) => {
        setUiColor(color);
    }

    return (
        <div>
            <div className="message" style={{color:`${uiColor}`}}>
                Hello friend!!!
            </div>
            <Input getColor={colorSetting} base={baseColor} />
        </div>
    )
}

export default Message;
