import React from "react";

// Children Imports
import CarouselComponent from "./carousel-component";
import VideoComponent from "./video-component";

// Legacy Imports
import Stack from 'react-bootstrap/Stack';

import kerala_culture from '../../../assets/kerala-culture.jpg';


const KeralaFestivalTourComponent = ()=> {
    // renderer
    return(
        <Stack gap={3} className="festival-tour-container mt-4">
            <div className="w-100 d-flex justify-content-center">
                <h1 className="text-dark">SPECIAL KERALA FESTIVAL TOURS</h1>
            </div>
            <div className="w-100 px-0 d-flex justify-content-center"><CarouselComponent/></div>
            <div className="row custom-padded-content d-flex align-items-center">
                <div className="col-12 col-md-6"><VideoComponent/></div>
                <div className="col-12 col-md-6">
                    <img 
                        src = {kerala_culture}
                        width = {'100%'}
                        height={'312px'}
                        alt={'kerala Culture'}
                    />
                </div>
            </div>
        </Stack>
    )
}

export default KeralaFestivalTourComponent;