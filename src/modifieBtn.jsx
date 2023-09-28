import EditIcon from "./Editicon";

function ModBtn({changeBGC ,modFlag , setModFlag , setInputV , p_content , setP_content , inputV , fontsize}){
    return (<>
            <button className="editBtn" style={{display:"flex", padding:"7px" , margin:"0px 25px" , backgroundColor:changeBGC(modFlag)}}  onClick={() => {setModFlag(!modFlag);!modFlag ? setInputV(p_content):setP_content(inputV)} }>
                <EditIcon fontsize={fontsize}/>
            </button>
    </>)
}

export default ModBtn;