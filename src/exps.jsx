import './style/expsStyle.css'
import TextArea from './textArea'
import TextBox from './textBox'
const dd = "description : Lorem ipsum\ dolor sit amet consectetur adipisicing elit. Hic ex velit ab illo explicabo! A vitae dolorem molestias hic animi nulla ex perferendis deleniti reprehenderit sint dignissimos, necessitatibus illo explicabo?"
function Experiences({flag}){
    return (<div className='exp'>
        <div className='exp-title'>
            <TextBox fontsize={28} content={"experience type date"} fontweight={"900"} marginXY='0px 0px'/>
        </div>
            <TextArea fontsize={18} fontweight={"400"} content={dd} classname={"exp-description"} />  
    </div>)
}

export default Experiences