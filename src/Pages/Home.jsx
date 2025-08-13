import Layout from "../Components/Layout";
import CreateTask from "../Tasks/CreateTask";
import TaskButtonGroup from "../Tasks/TaskButtonGroup";
import AllTask from "../Tasks/AllTask";
import { useState } from "react";

function Home({greet,tasks}){
    const [active , setActive] = useState('Active');

    const handleActive = (activeButton) =>{
        setActive(activeButton);
    }
    return(
        <Layout>
            
            <CreateTask greet={greet}/>
            <div className="container mx-auto mt-10 ">
                 <TaskButtonGroup active={active} onClick = {handleActive}/>
                 {active === 'Active' && <AllTask tasks = {tasks}/>}
            </div>
           
        </Layout>
    );
}

export default Home;