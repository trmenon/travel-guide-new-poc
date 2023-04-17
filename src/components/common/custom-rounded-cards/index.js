import React from "react";
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

const CustomRoundedCard = (props)=> {
    return(
        
        <div className="custom-rounded-card d-flex justify-content-center">
            <Stack gap={3}>
                <div className="w-100 d-flex justify-content-center mt-2">
                    <div className="bg d-flex justify-content-center">{props?.media}</div>
                </div>
                <div className="w-100">
                    <h4 className="text-center">{props?.title}</h4>
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <Button variant="link">Learn More</Button>
                </div>
            </Stack>
        </div>
    )
    
}

export default CustomRoundedCard;