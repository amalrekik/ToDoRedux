import {configureStore, createSlice} from '@reduxjs/toolkit'
const todoSlice = createSlice(
    {
        name :"todo",
        initialState:[
            {id:1 , text:"sport (marche) durant une heure " , done:false },
            {id:2 , text:"ménage de la maison " , done:false }
        ], 
        reducers:{
            addTask:(state,action)=>{
            const newTask={
               id:  state[state.length-1].id+1,
              done:false, 
               text:action.payload
               }
              state.push(newTask);
            },
            toggleTask:(state,action)=>{
              const task = state.find((t)=>t.id=== action.payload);
              task.done=!task.done
            },
            deleteTask:(state,action)=>{
             state=state.filter((t)=>t.id!==action.payload);
             return state
            },
            editTask:(state,action)=>{
                const adiTask={
                    id: action.payload.id,
                    text:action.payload.text,
                    done:action.payload.done,

                    }
           state.splice(action.payload.id-1,1, adiTask)
            },
           
        }
    }
)
export default todoSlice;
export const {addTask, deleteTask, toggleTask, editTask}=todoSlice.actions;

export const store= configureStore(
    {
        reducer:{
            todo:todoSlice.reducer
        }
    }
);
