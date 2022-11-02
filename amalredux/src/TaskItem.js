import { useDispatch } from "react-redux"
import { deleteTask,  toggleTask } from "./redux";
import { useState } from 'react';



const TaskItem = (props) => {
    const { task } = props
    const [text, setText] = useState(" ");
   const dispatch = useDispatch();
    const handleEdit = (e) => {
       
        e.preventDefault();
        dispatch({
            type: "todo/editTask",
            payload: {id:task.id, 
            text:text, done:task.done}
        });
        setText(" ");

    }
    return (
        <div style={{fontSize:'20px', paddingLeft:'35px', backgroundColor:(task.done) ? 'rgb(246, 184, 194)' : ''}}>
        <div className="flex-container" >
            <div >
            <input
                    type="checkbox"
                    cheked={task.done.toString()}
                    onChange={() => dispatch(toggleTask(task.id))} /> 
                {task.text}
            </div>
      <div>
      <input
                    type="text"
                    placeholder='Modifier votre tache'
                    onChange={(e) => setText(e.target.value)}
                    style={{fontSize:'19px', color:'rgb(69, 69, 69)'}}
                />
                <a style={{paddingRight:'4px'}}></a>
                <button onClick={handleEdit} style={{backgroundColor:'rgba(50, 253, 253, 0.787)', borderWidth:'0', fontSize:'22px', color:'rgb(69, 69, 69)', borderRadius:'3px'}}>edit</button> 
                <a style={{paddingRight:'10px'}}></a>
                 <span style={{backgroundColor:'rgb(253, 80, 109)', paddingLeft:'5px', paddingRight:'5px', textAlign:"right", borderRadius:'3px', color:'rgb(69, 69, 69)'}}
                    onClick={() => dispatch(deleteTask(task.id))}
                    role="button">X
                   
                </span>
      </div>
                
                
                
            
        </div></div>
    )
};
export default TaskItem;