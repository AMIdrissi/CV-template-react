import { useState } from 'react';
import DeleteIcon from './DeleteIcon';
import EditIcon from './Editicon';
import './style/skillBoxStyle.css'
import DeleteBtn from './DeleteButton';

function SingleexpBox({Name="Name"}){

    const [deleteFlag , SetDeleteFlag] = useState(false);
    const [editFlag , SetEditFlag] = useState(false);
    const [p_content,setP_content] = useState(Name);
    const [inputV,setInputV] = useState(Name);
    const [pos , setPos] = useState(50);
    const changeBGC = (editFlag) => {
        if (editFlag) {
            return "#646cff";
        }
    }
    const visible = (editFlag) => {
        if (editFlag) {
            return "none";
        }
        else {
            return "block"
        }
    }
    const hideElm = (deleteFlag) => {
        if (deleteFlag) {
            return "none";
        }
    }

    return <div className='progress-wrapper' key={Name} style={{display:hideElm(deleteFlag)}}>
                <div className='progress' style={{display:visible(editFlag)}}>
                    <h3 className="skill-title" style={{margin:"20px 0px"}} >{p_content}</h3>
                    <div className="progress-cont">
                        <div className="inner-progress-cont" style={{width:pos+"%"}}></div>
                    </div>
                </div>
                <div className='progress' style={{display:visible(!editFlag)}}>
                    <div>
                        <input type="text" id='skill-tittle-input' value={inputV} onChange={(e) => {setInputV(e.target.value)}} style={{display:visible(!editFlag)} }/>
                    </div>
                    <div className="edit-progress">
                        <p style={{margin:"0px 15px"}}>{pos}%</p>
                        <input type="range" min={0} max={100} id="range" onChange={(e) => {setPos(e.target.value)}}/>
                    </div>
                </div>
                <div className='Btns'>
                    <button style={{backgroundColor:changeBGC(editFlag)}} onClick={() => {SetEditFlag(!editFlag);!editFlag ? setInputV(p_content):setP_content(inputV)}}><EditIcon fontsize={16}/></button>
                    <DeleteBtn deleteFlag={deleteFlag} setdeleteFlag={SetDeleteFlag} fontSize={16} Padding=''/>
                </div>
            </div>
}

export default SingleexpBox;