import React from "react";
import Button from 'react-bootstrap/Button';

const CustomImageCard = (props)=> {
    return(
        <React.Fragment>
            <div className="custom-image-card">
                {props?.media}
                <div className="custom-overlay-component">
                    <div className="custom-overlay-content">
                        <h4 className="text-white">{props?.title}</h4>
                        <p className="text-success">{props?.subtitle}</p>
                        <Button variant='success'>BOOK NOW</Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CustomImageCard;