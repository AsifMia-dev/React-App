
import Button from './Components/Button';
import Layout from './Components/Layout';
import AppRoutes from './AppRoutes/AppRoutes';
import Login from './AuthenTicate/Login';
import { useState } from 'react';

function App() {
  const [allTask,setAllTask] = useState([]);

    const AddTask = (task)=>{
      setAllTask([...allTask,task]);
    }
    console.log(allTask);
  return (
    <>
      <AppRoutes greet={AddTask} tasks={allTask}/>
    </>
  )
}

export default App;
