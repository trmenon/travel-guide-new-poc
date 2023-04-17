import React from "react";

// Legacy Imports
import Button from 'react-bootstrap/Button';

const CustomRichButton = (props)=> {
    return(
        <Button
            className="custom-rich-btn"
            onClick = {()=>props?.trigger()}
        >
            {props?.label}
        </Button>
    )
}

export default CustomRichButton;