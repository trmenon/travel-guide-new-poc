import React from "react";
import { CustomRoundedCard } from "../../common";
import TestimonialComponent from "./testimonial-component";

// Legacy Imports
import Stack from 'react-bootstrap/Stack';

// Assets
import romantic_getaway from '../../../assets/romatic_getaway.png';
import campfire from '../../../assets/campfire.png';
import contact_us from '../../../assets/contact_us.png';
import tour_guide from '../../../assets/tour_guide.png';

const PremiumFeaturesComponent = ()=> {
    // renderer
    return(
        <Stack gap={2} className="mt-4 d-flex justify-content-center">
            <div className="w-100 d-flex justify-content-center">
                <h1 className="text-dark">OUR PREMIUM FEATURES</h1>
            </div>
            <div className="w-100 d-flex justify-content-center">
                <p className="custom-cursive-text custom-text-regular custom-text-danger">we will make your dreams come true</p>
            </div>
            <div className="w-100 d-flex justify-content-center">
                <div className="custom-padded-content d-flex justify-content-center row">
                    <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                        <CustomRoundedCard
                            media = {
                                <img 
                                    src={romantic_getaway}
                                    width={'100%'}
                                    alt = {'Romantic Getaway'}
                                />
                            }
                            title = {'FREE BIKE RIDE'}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                        <CustomRoundedCard
                            media = {
                                <img 
                                    src={campfire}
                                    width={'100%'}
                                    alt = {'Camp fire'}
                                />
                            }
                            title = {'CAMP FIRE'}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                        <CustomRoundedCard
                            media = {
                                <img 
                                    src={contact_us}
                                    width={'100%'}
                                    alt = {'Contact us'}
                                />
                            }
                            title = {'24/7 SUPPORT'}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                        <CustomRoundedCard                        
                            media = {
                                <img 
                                    src={tour_guide}
                                    width={'100%'}
                                    alt = {'Tour Guide'}
                                />
                            }
                            title = {'TOUR GUIDE'}
                        />
                    </div>
                </div>
            </div>
            <div className="w-100"><TestimonialComponent/></div>
        </Stack>
    )
}

export default PremiumFeaturesComponent;