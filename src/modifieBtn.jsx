import EditIcon from "./Editicon";
import './style/modifieBtnStyle.css'

function ModBtn({changeBGC ,modFlag , setModFlag , setInputV , p_content , setP_content , inputV , fontsize}){
    return (<>
            <button className="editBtn" style={{backgroundColor:changeBGC(modFlag)}}  onClick={() => {setModFlag(!modFlag);!modFlag ? setInputV(p_content):setP_content(inputV)} }>
                <EditIcon fontsize={fontsize}/>
            </button>
    </>)
}

export default ModBtn;