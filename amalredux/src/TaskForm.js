import{useState} from 'react'
import { useDispatch } from 'react-redux';
const TaskForm=()=>{
const [text, setText]=useState(" ");
const dispach = useDispatch();
const handleSubmit =(e)=>{
    e.preventDefault();
    dispach({
        type:"todo/addTask",
        payload:text,
    });
    setText(" ");}
    return(
        <div className='footer'>
        <div style={{ paddingLeft:'5%', paddingRight:'5%', paddingTop:'20px', paddingBottom:'20px', borderColor:'grey'}}>
        <form onSubmit={handleSubmit} >
            <input
            type="text"
            placeholder='ajouter une tache-entrer'
            onChange={(e)=>setText(e.target.value)}
            style={{width:'100%', height:'40px', fontSize:'20px', borderRadius:'5px', borderColor:'grey'}}
            />

        </form></div></div>
    )
}
;
export default TaskForm;