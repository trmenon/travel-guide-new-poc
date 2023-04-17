import React, { useState} from "react";
import { CustomInputText, CustomTextarea } from "../../../common";
import { form_fields } from "./constants";

const EnquiryForm = ()=> {
    // State
    const [fields, setFields] = useState({
        name: '',
        email: '',
        number: '',
        preference: '',
        members: '',
        message: ''
    });


    return(
        <React.Fragment>
            {
                Object.values(form_fields).map((element)=> {
                    return(
                        <div key = {element?.key} className="w-100 py-3">
                            {
                                element?.type === 'textarea'?
                                    <CustomTextarea
                                        name = {element?.placeholder}
                                        type = {element?.type}
                                        value = {fields[`${element?.name}`]}
                                    />
                                    :
                                element?.type === 'select'?
                                    <CustomInputText 
                                        name = {element?.placeholder}
                                        type = {element?.type}
                                        value = {fields[`${element?.name}`]}
                                    />
                                    :
                                    <CustomInputText 
                                        name = {element?.placeholder}
                                        type = {element?.type}
                                        value = {fields[`${element?.name}`]}
                                    />
                            }
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default EnquiryForm;