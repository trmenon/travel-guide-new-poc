import React from "react";
import testimonial1 from '../../../../assets/testimonial1.webp';
import testimonial2 from '../../../../assets/testimonial2.jpg';
import testimonial3 from '../../../../assets/testimonial3.webp';

// Legacy Imports
import Stack from 'react-bootstrap/Stack';
import { CustomUnborderedCard } from "../../../common";

const TestimonialComponent = ()=> {
    return(
        <React.Fragment>
            <div className="testimonial-container">
                <div className="custom-padded-content">
                    <Stack gap={4} className="mt-4 d-flex justify-content-center">
                        <div className="w-100 d-flex justify-content-center">
                            <p className="custom-cursive-text custom-text-medium custom-text-blue custom-text-bold">Our customers love</p>
                        </div>
                        <div className="w-100 row">
                            <div className="col-12 col-md-4">
                                <CustomUnborderedCard
                                    media = {testimonial1}
                                    title = {'Miachel & Jenny'}
                                    content = {'We created alot of wonderful memories and the trip was so nice.'}
                                    rating = {4.5}
                                />
                            </div>
                            <div className="col-12 col-md-4">
                                <CustomUnborderedCard
                                    media = {testimonial2}
                                    title = {'Rohith & Amrutha'}
                                    content = {'A truly satidfying experience. Travel Guides had a great co-ordination.'}
                                    rating = {3.4}
                                />
                            </div>
                            <div className="col-12 col-md-4">
                                <CustomUnborderedCard
                                    media = {testimonial3}
                                    title = {'James & Anna'}
                                    content = {'They have really good packages at very reasonable rates.'}
                                    rating = {4}
                                />
                            </div>
                        </div>
                    </Stack>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TestimonialComponent;