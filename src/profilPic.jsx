import './style/profilPicStyle.css'
import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function ProfilPic(props){

    const [inputValue , setInputValue] = useState("https://cdn.discordapp.com/attachments/1091841712445477018/1156953854454276116/mie_chan.jpg?ex=6516d8be&is=6515873e&hm=213e1e5fced2f5e7e045af0d7c47d0e398258340f5be8a7704d47ba8c21a3701&");
    const [value, setValue] = useState("");
    const [pos , setPos] = useState(0);

    const controlV = (val) => {
        if(/*! /[0-9]/.test(String(val)[String(val).length-1])*/ true){
            setValue(val);
        }
        
    }

    return <div className='pfpConatiner'>
                <div className='pfp'>
                    <p>edit</p>
                    <Popup contentStyle={{color:"black"}} onClose={() => {setValue("")}} trigger=
                        {<div className='pfpBox'>
                            <img style={{objectPosition:`${pos}% 0%`}} src={inputValue} alt="" />
                            </div>}
                        position="bottom center">
                        <div >
                            <div style={{display:"flex" , flexDirection:"column"}}>
                                <input
                                    type="text"
                                    value={value}
                                    placeholder='URL'
                                    style={{padding:"2px"}}
                                    onFocus={(event) => {event.target.value=''}}
                                    onChange={(event) => {
                                        return controlV(event.target.value);
                                    }}
                                />
                                <p style={{textAlign:"center" , margin:"2px 0px" , marginTop:"10px"}}>position</p>
                                <input type="range" min={0} max={100} id="range" onChange={(e) => {setPos(e.target.value)}}/>
                                <button type="button" style={{fontSize:"15px", margin:"5px 20px 3px 20px"}} onClick={() => {setInputValue(value); value='';}}>confirme</button>
                            </div>
                        </div>
                    </Popup>
                </div>
            </div>
}

export default ProfilPic;