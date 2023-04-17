import React, {useState, useEffect} from "react";

const CustomInputText = (props)=> {
    // state
    const [value, setValue] = useState('');
    // Effects
    useEffect(()=> {setValue(props?.value)}, [props]);
    // Handlers
    const handleChange = (event)=> setValue(value+event.target.value);
    
    return(
        <React.Fragment>
            <div className="custom-form-field">
                <input 
                    className="custom-input-underlined" 
                    placeholder= {props?.name || ''}
                    type= {props?.type}
                    value = {value}
                    onChange={handleChange}
                />                
            </div>
        </React.Fragment>
    )
}

export default CustomInputText;