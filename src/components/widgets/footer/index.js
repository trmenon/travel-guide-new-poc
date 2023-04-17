import React, {useState} from "react";
import footer from '../../../assets/footer.png';
import {
    FacebookIconButton,
    InstagramIconButton,
    TwitterIconButton,
    WhatsappIconButton
} from '../../common/social-media-icon-buttons';

// Legacy Imports
import Stack from 'react-bootstrap/Stack';

import { link_constants } from "./link-constants";

const FooterComponent = ()=> {
    // State
    const [state, setState] = useState({link: '', vendor: ''});

    // Handlers
    const selectLink = (value)=> setState({...state, link: value});

    // renderer
    return(
        <div className="footer-container">
            <div className="footer-content">
                <div className="row w-100 ">
                    <div className="col-6 col-md-4 mt-2">
                        <Stack gap={1}>
                            <div>
                                <h5 className="typography-orange">ABOUT US</h5>
                            </div>
                            <div>
                                <ul className="nav flex-column">
                                    {
                                        Object.values(link_constants).map((element)=> {
                                            return(
                                                <li 
                                                    key = {element?.key}
                                                    className={`nav-item footer-link ${state?.link === element?.key? 'footer-link-active': ''}`}
                                                    onClick = {()=> selectLink(element?.key)}
                                                >
                                                    {element?.label}
                                                </li>
                                            )
                                        })
                                    }
                                    
                                </ul>
                            </div>
                        </Stack>
                    </div>
                    <div className="col-6 col-md-5 mt-2">
                        <Stack gap={1}>
                            <div>
                                <h5 className="typography-orange">SOCIAL MEDIA</h5>
                            </div>
                            <div className="w-100 d-flex justify-content-start">
                                <Stack direction="horizontal" gap={2}>
                                    <FacebookIconButton/>
                                    <InstagramIconButton/>
                                    <TwitterIconButton/>
                                    <WhatsappIconButton/>
                                </Stack>
                            </div>
                        </Stack>
                    </div>
                    <div className="col-12 col-md-3 mt-2 ">
                        <Stack gap={2}>
                            <div>
                                <img
                                    src = {footer}
                                    alt = {'footer-illustration'}
                                    width = {'160px'}
                                />
                            </div>
                            <div>
                                <h5 className="text-white">Explore the world</h5>
                            </div>
                        </Stack>
                    </div>
                </div>
                <div className="mt-4 d-flex justify-content-center">
                    <p className="copyright-text">
                        &#169; Travel Guide 2022 | Developed by Tushar Menon
                    </p>
                </div>
            </div>
            
        </div>
        
    )
}

export default FooterComponent;