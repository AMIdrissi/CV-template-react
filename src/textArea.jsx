import { useState } from "react";
import "./style/textBoxStyle.css"
import EditIcon from "./Editicon";

function TextArea({fontsize,content,fontweight,marginXY="10px 0px",classname}){

    const [modFlag,setModFlag] = useState(false);
    const [p_content,setP_content] = useState(content);
    const [inputV,setInputV] = useState(content);
    const changeBGC = (modFlag) => {
        if (modFlag) {
            return "#646cff";
        }
    }
    const visible = (modFlag) => {
        if (modFlag) {
            return "none";
        }
        else {
            return "block"
        }
    }

    return (<div style={{display:"flex" , alignItems:"center" ,justifyContent:"space-between"}}>
        <div>
            <textarea className={classname} id="Tarea" cols="80" rows="4" value={inputV} onChange={(e) => {setInputV(e.target.value);console.log(String(e.target.value))}} style={{fontSize:fontsize+"px" , fontWeight:fontweight , margin:marginXY, padding:(fontsize/7)+"px", width:"100%", display:visible(!modFlag) } }></textarea>
        </div>
        <p className={classname} style={{fontSize:fontsize+"px" , fontWeight:fontweight, display:visible(modFlag) , whiteSpace:"pre-wrap"}}>{p_content}</p>
        <div>
            <button className="editBtn" style={{display:"flex", padding:"7px" , margin:"0px 25px" , backgroundColor:changeBGC(modFlag)}}  onClick={() => {setModFlag(!modFlag);!modFlag ? setInputV(p_content):setP_content(inputV)} }>
                <EditIcon fontsize={fontsize}/>
            </button>
        </div>
    </div>)
}

export default TextArea;