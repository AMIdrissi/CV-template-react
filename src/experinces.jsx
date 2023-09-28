import { useState } from 'react'
import DeleteIcon from './DeleteIcon'
import './style/experincesStyle.css'
import TextArea from './textArea'
import TextBox from './textBox'
import DeleteBtn from './DeleteButton'

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
                        <TextBox fontsize={30} content={"name type date"} fontweight={"600"} marginXY='0px 15px 0px 0px'/>
                    </div>
                        <TextArea fontsize={20} fontweight={"400"} content={dd} classname={"exp-description"} /> 
                </div>
                <div>
                    <DeleteBtn deleteFlag={deleteFlag} setdeleteFlag={SetDeleteFlag}/>
                </div>
            </div>)
}

export default Experiences