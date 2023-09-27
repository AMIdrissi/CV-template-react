import './style/expsStyle.css'
const dd = "description : Lorem ipsum\ dolor sit amet consectetur adipisicing elit. Hic ex velit ab illo explicabo! A vitae dolorem molestias hic animi nulla ex perferendis deleniti reprehenderit sint dignissimos, necessitatibus illo explicabo?"
function Experiences({flag}){
    return (<div className='exp'>
        <ul>
            <li className='exp-title'>experience type date</li>
        </ul>
        <e className='exp-description'>{dd}</e>   
    </div>)
}

export default Experiences