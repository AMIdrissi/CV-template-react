import SingleexpBox from "./skillBox";
import Experiences from "./experinces";

function GenericConatiner({ListL=[] , ListR=[], setLeftindex, setRightindex, Leftindex=0, Rightindex=0 , Ltitle , Rtitle}){
    return (
        <div className='wrapper'>
                    <div key="skills" className="left-container" onClick={(e)=>{e.currentTarget.add} }>
                        <div style={{textAlign:"center"}}>
                            <h2 style={{fontSize:"32px", margin:"0px 28px" , padding:"27px 0px" , backgroundColor:"#eeeeee12" , border:"1px solid #eeeeee10" , borderRight:"0px"}}>{Ltitle}</h2>
                        </div>
                            {
                            (ListL).map((skill) => {
                                    return skill;
                                }
                            )}
                        <div style={{display:'flex',justifyContent:'center',margin:"20px 0px"}}>
                            <button className='addBtn' style={{backgroundColor:"#228f38" , fontSize:"21px" , fontWeight:"bold"}} onClick={() => {setLeftindex(Leftindex+1);ListL.push(<SingleexpBox key={Leftindex}/>);}}>+</button>
                        </div>
                    </div>
                    <div className="right-container">
                        <div style={{textAlign:"center"}}>
                            <h2 style={{fontSize:"32px", margin:"0px" , padding:"27px 0px" , backgroundColor:"#eeeeee12" , border:"1px solid #eeeeee10" , borderRight:"0px"}}>{Rtitle}</h2>
                        </div>
                            {(ListR).map((exp) => {
                                return exp
                            })}
                        <div style={{display:'flex',justifyContent:'center',margin:"20px 0px"}}>
                            <button className='addBtn' style={{backgroundColor:"#228f38" , fontSize:"21px" , fontWeight:"bold"}} onClick={() => {setRightindex(Rightindex+1);ListR.push(<Experiences key={Rightindex+"b"}/>);}}>+</button>
                        </div>
                    </div>
                </div>
    )
}


export default GenericConatiner;