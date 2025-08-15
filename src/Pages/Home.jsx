import Layout from "../Components/Layout";
import CreateTask from "../Tasks/CreateTask";
import TaskButtonGroup from "../Tasks/TaskButtonGroup";
import FilterTask from "../Tasks/FilterTask";
import AllTask from "../Tasks/AllTask";
import { useState } from "react";

function Home({greet,tasks,markCompleted,markInProgress}){
    const [active , setActive] = useState('All Task');

    const handleActive = (activeButton) =>{
        setActive(activeButton);
    }
    return(
        <Layout>
            
            <CreateTask greet={greet}/>
            <div className="container mx-auto mt-10 ">
                 <TaskButtonGroup active={active} onClick = {handleActive}/>
                 {
                    active === "All Task" ? <AllTask tasks={tasks} markInProgress={markInProgress}/> : <FilterTask active = {active} tasks={tasks} markInProgress={markInProgress} markCompleted={markCompleted} />
                 }
                 
            </div>
           
        </Layout>
    );
}

export default Home;