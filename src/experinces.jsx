import { useState } from 'react'
import DeleteIcon from './DeleteIcon'
import './style/experincesStyle.css'
import TextArea from './textArea'
import TextBox from './textBox'

const dd = "description : Lorem ipsum\ dolor sit amet consectetur adipisicing elit. Hic ex velit ab illo explicabo! A vitae dolorem molestias hic animi nulla ex perferendis deleniti reprehenderit sint dignissimos, necessitatibus illo explicabo?"

const hideBox = (deleteFlag) => {
    if (deleteFlag) {
        return "none";
    }
}

function Experiences(){
    const [deleteFlag , SetDeleteFlag] = useState(false);
    return (<div className='exp' style={{display:hideBox(deleteFlag)}}>
                <div>
                    <div className='exp-title'>
                        <TextBox fontsize={28} content={"experience type date"} fontweight={"900"} marginXY='0px 0px'/>
                    </div>
                        <TextArea fontsize={18} fontweight={"400"} content={dd} classname={"exp-description"} /> 
                </div>
                <div>
                <button style={{backgroundColor:"#cc2233" , border:"1px solid white" , padding:"20px 20px", display:'flex'}} onClick={() => {SetDeleteFlag(!deleteFlag)}}>
                    <DeleteIcon fontsize={16}/>
                </button>
                </div>
            </div>)
}

export default Experiences