
import './App.css';
import TasksList from './TasksList';
import TasksHeader from './TasksHeader';
import TaskForm from './TaskForm';
import {Provider} from 'react-redux';
import {store} from './redux'

function App() {
  return (
    <div >
    <Provider store={store}>
      <TasksHeader/>
      <TasksList/>
      
      <TaskForm/>
     
      </Provider>
    </div>
  );
}

export default App;
//