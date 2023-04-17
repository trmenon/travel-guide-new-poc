import React from "react";

// Assets
import varnasi from '../../../assets/varanasi.webp';
import rajasthan from '../../../assets/rajasthan.jpg';
import jammukashmir from '../../../assets/jammukashmir.jpg';
import punjab from '../../../assets/punjab.jpg';

// Legacy Imports
import Stack from 'react-bootstrap/Stack';
import { CustomImageCard } from "../../common";

const NorthIndianToursComponent = ()=> {
    // renderer
    return(
        <Stack gap={3} className="mt-4 d-flex justify-content-center">
            <div className="w-100 d-flex justify-content-center">
                <h1 className="text-dark">NORTH INDIAN TOURS</h1>
            </div>
            <div className="w-100 d-flex align-items-center justify-content-center">
                <div className="custom-padded-content">
                    <div className="row w-100">
                        <div className="col-12 col-sm-6 col-md-3 my-2">
                            <CustomImageCard 
                                media = {
                                    <img 
                                        src={varnasi}
                                        width={'75%'}
                                        alt={'Varnasi'}
                                    />
                                }
                                title={'VARNASI'}
                                subtitle={'Rs. 12000 / Person'}
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 my-2">
                            <CustomImageCard 
                                media = {
                                    <img 
                                        src={jammukashmir}
                                        width={'75%'}
                                        alt={'Kashmir'}
                                    />
                                }
                                title={'KASHMIR'}
                                subtitle={'Rs. 20000 / Person'}
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 my-2">
                            <CustomImageCard 
                                media = {
                                    <img 
                                        src={punjab}
                                        width={'75%'}
                                        alt={'Punjab'}
                                    />
                                }
                                title={'PUNJAB'}
                                subtitle={'Rs. 14000 / Person'}
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 my-2">
                            <CustomImageCard 
                                media = {
                                    <img 
                                        src={rajasthan}
                                        width={'75%'}
                                        alt={'Rajasthan'}
                                    />
                                }
                                title={'RAJASTHAN'}
                                subtitle={'Rs. 18000 / Person'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Stack>
    )
}

export default NorthIndianToursComponent;