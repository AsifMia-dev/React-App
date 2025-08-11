import Layout from "../Components/Layout";
import CreateTask from "../Tasks/CreateTask";


function Home({greet,tasks}){
    console.log("Task from home" ,tasks);
    return(
        <Layout>
            <CreateTask greet={greet}/>
            <div className="container mx-auto mt-10 bg-gray-200 h-auto w-full">

                   {tasks.map((task, index) => {
                    return (
                        <li
                            className="bg-gray-500 px-4 pt-2 text-white w-full h-10 list-none mb-0.5 rounded hover:bg-gray-400"
                        >
                            {task}
                        </li>
                    );
                })}
        

            </div>
        </Layout>
    );
}

export default Home;