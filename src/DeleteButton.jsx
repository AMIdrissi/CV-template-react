import DeleteIcon from "./DeleteIcon";
import './style/DeleteButtonStyle.css'

function DeleteBtn({setdeleteFlag , deleteFlag , fontSize=16 , Padding="20px 20px"}){
    
    return (<>
        <button className="D-Btn" style={{padding:Padding}} onClick={() => {setdeleteFlag(!deleteFlag)}}>
                <DeleteIcon fontsize={fontSize}/>
        </button>
    </>)
}

export default DeleteBtn;