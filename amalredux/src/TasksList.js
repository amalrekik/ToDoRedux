import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'
import {useState} from 'react'
const TasksList=()=>{
const tasks =useSelector((state)=>state.todo)
const [taski, setTask]=useState([])
const handelDone=()=>setTask(tasks.filter((x)=>{return x.done==true}))
const handelTodo=()=>setTask(tasks.filter((x)=>{return x.done==false}))
  return(
<div style={{paddingTop:'20px'}}>
{tasks.map(t=>{return (<div key={t.id}><TaskItem task={t}/></div>)})}
<div style={{textAlign:'center', paddingLeft:'400px', paddingRight:'400px', paddingTop:'10px'}}>
<button onClick={handelTodo} style={{ fontSize:'23px', paddingLeft:'70px', paddingRight:'70px', color:'rgb(69, 69, 69)', backgroundColor:'rgba(50, 253, 253, 0.787)', borderRadius:'5px', borderWidth:'1px', borderColor:'rgb(69, 69, 69)'}}>Not yet </button>
<button onClick={handelDone} style={{ fontSize:'23px', paddingLeft:'70px', paddingRight:'70px', color:'rgb(69, 69, 69)', backgroundColor:'rgb(253, 80, 109)', borderRadius:'5px', borderWidth:'1px', borderColor:'rgb(69, 69, 69)'}}>done </button><hr/></div>
<div style={{textAlign:'left', fontSize:'22px', paddingBottom:'100px', paddingLeft:'30%'}}>{taski.map(t=>{return (
<ul key={t.id}><li style={{paddingTop:'-10px'}}>{t.text}</li></ul>)})}</div>

</div>

  )
};
export default TasksList;
//