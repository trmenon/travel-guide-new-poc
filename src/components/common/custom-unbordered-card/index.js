import React from "react";
import StarRatings from "react-star-ratings";

// Legacy Imports
import Card from 'react-bootstrap/Card';

const CustomUnborderedCard = (props)=> {
    return(
        <Card className="custom-unbordered-card bg-transparent">
            <Card.Img variant="top" src={props.media} />
            <Card.Body className="d-flex justify-content-center flex-column">
                <Card.Title className="text-center">{props?.title}</Card.Title>
                <div className="w-100 d-flex justify-content-center">
                    <StarRatings
                        rating={props?.rating}
                        starRatedColor={'#ffa500'}
                        starDimension="16px"
                        starSpacing="8px"
                    />
                </div>                
                <Card.Text className="text-center">{props?.content}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CustomUnborderedCard;