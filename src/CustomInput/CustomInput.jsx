import { useState } from "react";

function CustomInput() {
    const [value, setValue] = useState('');
    const [count , setCount] = useState(0);

    const controlV = (val) => {
        if(/*! /[0-9]/.test(String(val)[String(val).length-1])*/ true){
            setValue(val);
            setCount((countV) => {return countV+1} )
            console.log(count , val)
        }
        
    }
    
    return (
       <div>
            <input
            type="text"
            value={value}
            onChange={(event) => {
                return controlV(event.target.value);
            }}
        />
        <button>confirme</button>
       </div>
    );
 }

 export default CustomInput;