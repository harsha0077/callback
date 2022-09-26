import React,{useState} from "react";

const Input = ({getColor,base}) => {
    const [activeColor, setActiveColor] = useState();
    const handleChange = (e) => {
        const { value } = e.target;
        setActiveColor(value);
        getColor(value);
    }
    return (
        <div className="input">
            <input
                type="text"
                value={activeColor}
                onChange={handleChange}
                style={{ backgroundColor: `${base}`}}
            />
        </div>
    )
}

export default Input;