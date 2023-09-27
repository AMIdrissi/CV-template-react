import { useState } from 'react';
import CVinfos from './CVinfo';
import SingleexpBox from './SingleexpBox';
import ProfilPic from './profilPic';
import './style/containerStyle.css'

ProfilPic.defaultProps = {
    path:"https://cdn.discordapp.com/attachments/1092253246812332112/1129231426798235648/1689300143433.jpg"
}

const skills = [<SingleexpBox Name='Python' key={1}/>,
                 <SingleexpBox Name='C++'  key={2}/>,
                 <SingleexpBox Name='JAVA' key={3}/>,
                 <SingleexpBox Name='Git'  key={4}/>,
                 <SingleexpBox Name='SQL'  key={5}/>,
                ]
const i=skills.length;

function Container() {
    const [skillList , setSkillList] = useState(skills);
    const [index , setIndex] = useState(i+1)

    return <div className="main-container">
                <div className='wrapper'>
                    <div className="left-container" >
                        <ProfilPic />
                    </div>
                    <div className="right-container">
                        <CVinfos/>
                    </div>
                </div>
                <div className='wrapper'>

                    <div key="skills" className="left-container" onClick={(e)=>{e.currentTarget.add}} style={{marginBottom:"20px"} }>
                        <div style={{textAlign:"center"}}>
                            <h2 style={{fontSize:"32px", margin:"0px" , padding:"27px 0px" , backgroundColor:"#eeeeee33" , border:"1px solid #eeeeee33" , borderRight:"0px"}}>skills</h2>
                        </div>
                            {
                            (skillList).map((skill) => {
                                    return skill;
                                }
                            )}
                        <div style={{display:'flex',justifyContent:'center',margin:"20px 0px"}}>
                            <button style={{backgroundColor:"#228f38" , fontSize:"21px" , fontWeight:"bold"}} onClick={() => {setIndex(index+1);skillList.push(<SingleexpBox key={index}/>);}}>+</button>
                        </div>
                    </div>
                    <div className="right-container">
                        <CVinfos/>
                    </div>
                </div>
            </div>
}

export default Container;