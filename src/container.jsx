import { useState } from 'react';
import CVinfos from './CVinfo';
import SingleexpBox from './skillBox';
import ProfilPic from './profilPic';
import './style/containerStyle.css'
import Experiences from './experinces';
import GenericConatiner from './GenericConatiner';

ProfilPic.defaultProps = {
    path:"https://cdn.discordapp.com/attachments/1092253246812332112/1129231426798235648/1689300143433.jpg"
}

const skills = [<SingleexpBox Name='Python' key={1}/>,
                 <SingleexpBox Name='C++'  key={2}/>,
                 <SingleexpBox Name='JAVA' key={3}/>,
                 <SingleexpBox Name='Git'  key={4}/>,
                 <SingleexpBox Name='SQL'  key={5}/>,
                ]
const languages = [
                    <SingleexpBox Name='Arabic' key={"1a"}/>,
                    <SingleexpBox Name='French'  key={"2a"}/>,
                    <SingleexpBox Name='English' key={"3a"}/>,
                  ]
const experiences = [
                    <Experiences key={"1b"}/>,
                    <Experiences key={"2b"}/>,
                    <Experiences key={"3b"}/>,
                    ]
                
const educations = [
                    <Experiences key={"1c"}/>,
                    <Experiences key={"2c"}/>,
                    <Experiences key={"3c"}/>,
                    ]
const hobbies = [
    <SingleexpBox Name='Photography' key={"1d2"}/>,
    <SingleexpBox Name='Basketball'  key={"2d2"}/>,
  ]

const i= skills.length;
const j= languages.length;
const k= experiences.length;
const l= educations.length;

function Container() {
    const [skillList , setSkillList] = useState(skills);
    const [langlList , setLanglList] = useState(languages);
    const [index , setIndex] = useState(i+1);
    const [jndex , setJndex] = useState(j+1);
    const [kndex , setKndex] = useState(k+1);
    const [lndex , setLndex] = useState(l+1);

    return <div className="main-container">
                <div className='wrapper'>
                    <div className="left-container" >
                        <ProfilPic />
                    </div>
                    <div className="right-container">
                        <CVinfos/>
                    </div>
                </div>
                <GenericConatiner ListL={skillList} ListR={experiences} Leftindex={index} Rightindex={kndex} setLeftindex={setIndex} setRightindex={setKndex} Ltitle={"Skills"} Rtitle={"Job Experience"} key1spec={"a"} key2spec={"b"} />
                <GenericConatiner ListL={langlList} ListL2={hobbies} ListR={educations} Leftindex={jndex} Rightindex={lndex} setLeftindex={setJndex} setRightindex={setLndex} Ltitle={"Languages"} Rtitle={"Education"} key1spec={"c"} key2spec={"d"} _2ndLContainer={true}/>
                <div style={{marginBottom:"30px"}}></div>
            </div>
}

export default Container;