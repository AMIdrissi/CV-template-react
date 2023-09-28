import './style/CVinfoStyle.css'
import TextBox from './textBox';

function CVinfos(){
    return <div className='infos'>
        {/* <h1 onClick={(e) => {console.log(e.currentTarget.lastChild.data)} }>Abdelmoghit Merzouki Idrissi</h1>
        <h2 onClick={(e) => {console.log(e.currentTarget.lastChild.data)} }>Junior software developper ?</h2>
        <p onClick={(e) => {console.log(e.currentTarget.lastChild.data.split(":")[1])} }> 📧 Email: amidrissi2002@gmail.com</p>
        <p onClick={(e) => {console.log(e.currentTarget.lastChild.data.split(":")[1])} }>📱 phone : 0789652145</p> */}
        <TextBox placeHolder='Name' fontsize="52" marginXY='20px 0px' content="Abdelmoghit Merzouki Idrissi" fontweight="900"/>
        <TextBox placeHolder='Job' fontsize="26" marginXY='10px 0px' content="Junior software developper ?" fontweight="700"/>
        <div style={{display:"flex"}}>
            <p style={{fontSize:"18px" , marginRight:"10px"}}> Email 📧 : </p>
            <TextBox placeHolder='Email' fontsize="18" content="amidrissi2002@gmail.com" fontweight="400"/>
        </div>
        <div style={{display:"flex"}}>
            <p style={{fontSize:"18px" , marginRight:"10px"}} > phone📱: </p>
            <TextBox placeHolder='phone' maxLen={10} fontsize="18" marginXY='15px 0px 15px 0px' content="0789652145" fontweight="400"/>
        </div>
    </div>
    
}

export default CVinfos;