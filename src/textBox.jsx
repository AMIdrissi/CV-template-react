import { useState } from "react";
import "./style/textBoxStyle.css"
import ModBtn from "./modifieBtn";

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
            <ModBtn changeBGC={changeBGC} modFlag={modFlag} setModFlag={setModFlag} setInputV={setInputV} p_content={p_content} setP_content={setP_content} inputV={inputV} fontsize={fontsize}/>
        </div>
    </div>)
}

export default TextBox;