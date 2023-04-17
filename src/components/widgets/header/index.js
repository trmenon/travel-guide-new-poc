import React, { useState} from "react";
import TopBar from "./top-bar";
import EnquiryForm from "./enquiry-form";

// Legacy Imports
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const HeaderComponent = ()=> {
    // State
    const [open, setOpen] = useState(false);

    // Event Handlers
    const handleClose = ()=> setOpen(false);
    const handleOpen = ()=> setOpen(true);

    // Renderer
    return(
        <React.Fragment>
            <Modal show={open} onHide={handleClose}>
                <Modal.Body className="">
                    <Modal.Title>Please share your details..</Modal.Title>
                    <div className="mt-2 custom-modal-body scrollbar">
                        <EnquiryForm/>
                    </div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center w-100">                
                    <Button className="custom-button-violet" variant="primary" onClick={handleClose}>
                        SUBMIT
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="container-main">
                <div className="px-sm-4 px-md-5">
                    <TopBar/>
                </div>
                <div className="px-6">
                    <div className="row w-100">
                        <div className="col-12 col-md-4"></div>
                        <div className="col-12 col-md-8">
                            <p className="brand-message-block d-flex justify-content-center">Travel</p>
                            <p className="brand-message-cursive d-flex justify-content-center">far enough,</p>
                            <p className="brand-message-block d-flex justify-content-center">You meet</p>
                            <p className="brand-message-cursive d-flex justify-content-center">yourself</p>
                        </div>
                    </div>                    
                </div>
                <div className="w-100 d-flex justify-content-center pb-4">
                    <Button variant="success" onClick={handleOpen}>ENQUIRY</Button>
                </div>
                    
                
            </div>
        </React.Fragment>
    )
}

export default HeaderComponent;