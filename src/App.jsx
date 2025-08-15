
import Button from './Components/Button';
import Layout from './Components/Layout';
import AppRoutes from './AppRoutes/AppRoutes';
import Login from './AuthenTicate/Login';
import { useState } from 'react';

function App() {
  const [allTask,setAllTask] = useState([]);

    const AddTask = (task)=>{
      setAllTask([
        ...allTask,
        {
          id:Date.now(),
          description:task,
          status:'All Task'
        }
      ]
    );
  }
  const markInProgress = (id) => {
    setAllTask(allTask.map(task =>
      task.id === id
        ? { ...task, status: 'In Progress' } // create new object for the updated task
        : task                             // keep other tasks unchanged
    ));
  };
    const markCompleted = (id) => {
    setAllTask(allTask.map(task =>
      task.id === id
        ? { ...task, status: 'Completed' } // create a new object with updated status
        : task                             // leave other tasks unchanged
    ));
    
  };
  console.log("Here is my all tasks",allTask);

  return (
    <>
      <AppRoutes greet={AddTask} tasks={allTask} markInProgress={markInProgress} markCompleted={markCompleted} />
    </>
  )
}

export default App;
