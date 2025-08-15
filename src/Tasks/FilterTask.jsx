import TaskContainer from "./TaskContainer";

function FilterTask({active,tasks, markInProgress,markCompleted}){
    console.log("Active Button ",active);
    return(
                 <TaskContainer>
                    {
                        tasks.filter((task) => task.status === active && task.status !=="All Task" ).map((task) =>{
                           return (
                            <li
                                key={task.id}
                                className="flex justify-between items-center bg-gray-500 px-4 pt-2 text-black w-full h-10 list-none mb-0.5 rounded hover:bg-gray-400"
                                >
                                <span>{task.description}</span>
                                 {/* Show radio button for Active tasks */}
                                 {task.status === "In Progress" && (
                                <button
                                    className="bg-green-400 px-2 rounded"
                                    onClick={() => markCompleted(task.id)}
                                >
                                    Complete
                                </button>
                                )}
                            </li>
                        ); 
                        })
                    }
                 </TaskContainer>   
        

    )
}
export default FilterTask;