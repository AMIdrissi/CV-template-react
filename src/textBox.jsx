import { useState } from "react";
import "./style/textBoxStyle.css"
import EditIcon from "./Editicon";

function TextBox({fontsize,content,fontweight,marginXY="10px 0px", placeHolder='' , maxLen=100 }){

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

    return (<div style={{display:"flex" , alignItems:"center" }}>
        <div>
            <input type="text" value={inputV} maxLength={maxLen} placeholder={placeHolder} onChange={(e) => {setInputV(e.target.value)}} style={{fontSize:fontsize+"px" , fontWeight:fontweight , margin:marginXY, padding:(fontsize/7)+"px", display:visible(!modFlag)} }/>
        </div>
        <p style={{fontSize:fontsize+"px" , fontWeight:fontweight , margin:marginXY , display:visible(modFlag) , whiteSpace:"pre-wrap"}}>{p_content}</p>
        <div>
            <button className="editBtn" style={{display:"flex", padding:"7px" , margin:"0px 25px" , backgroundColor:changeBGC(modFlag)}}  onClick={() => {setModFlag(!modFlag);!modFlag ? setInputV(p_content):setP_content(inputV)} }>
                <EditIcon fontsize={fontsize}/>
            </button>
        </div>
    </div>)
}

export default TextBox;