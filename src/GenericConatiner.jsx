import SingleexpBox from "./skillBox";
import Experiences from "./experinces";
import "./style/GenericContainerStyle.css"

function GenericConatiner({ListL=[] , ListL2=[] , ListR=[], setLeftindex, setRightindex, Leftindex=0, Rightindex=0 , Ltitle , Rtitle , key1spec , key2spec , _2ndLContainer=false}){
    const enanle2nsCont = () =>{
        if (_2ndLContainer) {
            return "inherit"   
        }
        else{
            return "none";
        }
    }

    
    return (
        <div className='wrapper'>
                    <div key="skills" className="left-container" onClick={(e)=>{e.currentTarget.add} }>
                        <div style={{textAlign:"center"}}>
                            <h2 style={{ color:"#eeeeeee0", fontSize:"32px", margin:"0px 28px" , padding:"27px 0px" , backgroundColor:"#eeeeee12" , border:"1px solid #eeeeee10" , borderRight:"0px"}}>{Ltitle}</h2>
                        </div>
                            {
                            (ListL).map((skill) => {
                                    return skill;
                                }
                            )}
                        <div style={{display:'flex',justifyContent:'center',margin:"20px 0px"}}>
                            <button className='addBtn' style={{backgroundColor:"#228f38" , fontSize:"21px" , fontWeight:"bold"}} onClick={() => {setLeftindex(Leftindex+1);ListL.push(<SingleexpBox key={Leftindex+key1spec}/>);}}>+</button>
                        </div>
                        <div id="2ndLcont" style={{display:enanle2nsCont()}}>
                            <div style={{textAlign:"center"}}>
                                <h2 style={{ color:"#eeeeeee0", fontSize:"32px", margin:"0px 28px" , padding:"27px 0px" , backgroundColor:"#eeeeee12" , border:"1px solid #eeeeee10" , borderRight:"0px"}}>Hobies</h2>
                            </div>
                                {
                                (ListL2).map((skill) => {
                                        return skill;
                                    }
                                )}
                            <div style={{display:'flex',justifyContent:'center',margin:"20px 0px"}}>
                                <button className='addBtn' style={{backgroundColor:"#228f38" , fontSize:"21px" , fontWeight:"bold"}} onClick={() => {setLeftindex(Leftindex+1);ListL2.push(<SingleexpBox key={Leftindex+key1spec+"2"}/>);}}>+</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="right-container">
                        <div style={{textAlign:"center"}}>
                            <h2 style={{ color:"#eeeeeee0", fontSize:"32px", margin:"0px" , padding:"27px 0px" , backgroundColor:"#eeeeee12" , border:"1px solid #eeeeee10" , borderRight:"0px"}}>{Rtitle}</h2>
                        </div>
                            {(ListR).map((exp) => {
                                return exp
                            })}
                        <div style={{display:'flex',justifyContent:'center',margin:"20px 0px"}}>
                            <button className='addBtn' style={{backgroundColor:"#228f38" , fontSize:"21px" , fontWeight:"bold"}} onClick={() => {setRightindex(Rightindex+1);ListR.push(<Experiences key={Rightindex+key2spec}/>);}}>+</button>
                        </div>
                    </div>
                </div>
    )
}


export default GenericConatiner;