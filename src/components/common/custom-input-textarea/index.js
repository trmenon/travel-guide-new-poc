import React from "react";

const CustomTextarea = (props)=> {
    
    
    return(
        <React.Fragment>
            <div className="custom-form-field">
                <textarea 
                    className="custom-input-textarea" 
                    placeholder= {props?.name || ''}
                    
                    cols={40} rows={6}
                />                
            </div>
        </React.Fragment>
    )
}

export default CustomTextarea;