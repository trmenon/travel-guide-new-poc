import React from "react";

// Legacy Imports
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CustomRichButton } from "../../common";

import { honeymoon_packages_data } from "./constants";

const HoneymoonPackagesComponent = ()=> {
    // renderer
    return(
        <React.Fragment>
            <Stack gap={3} className="mt-4 d-flex justify-content-center">
                <div className="w-100 d-flex justify-content-center">
                    <h1 className="text-dark">HONEYMOON PACKAGES</h1>
                </div>
                <div className="w-100 d-flex align-items-center justify-content-center">
                <div className="custom-padded-content">
                    <div className="row w-100 ">
                        {
                            Object.values(honeymoon_packages_data).map((element)=> {
                                return(
                                    <div key={element?.key} className="col-12 col-md-6 col-lg-3">
                                        <Card className="honeymoon-cards">
                                            <Card.Img variant="top" src={element?.image} className="card-image"/>
                                            <Card.Body>
                                                <Card.Title>{element?.title}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-danger font-weight-bold">{element?.subtitle}</Card.Subtitle>
                                                <Card.Text className="honeymoon-card-content">{element?.content}</Card.Text>
                                            </Card.Body>
                                            <div className="d-flex justify-content-center my-2">
                                                <Button variant="primary">BOOK NOW</Button>
                                            </div>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
                </div>
                <div className="w-100 d-flex justify-content-center mt-2">
                    <CustomRichButton 
                        label={'MORE PACKAGES'}
                        trigger = {()=> alert('More packages clicked')}
                    />
                </div>
            </Stack>

        </React.Fragment>
    )
}

export default HoneymoonPackagesComponent;