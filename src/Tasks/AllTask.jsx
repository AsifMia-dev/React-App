import TaskContainer from "./TaskContainer";
function AllTask({tasks,markInProgress}){
    return(
        <TaskContainer >
            {
                tasks.map((task) => {
                    return(
                        
                        <li
                                key={task.id}
                                className="flex justify-between items-center bg-gray-500 px-4 pt-2 text-black w-full h-10 list-none mb-0.5 rounded hover:bg-gray-400"
                                >
                                 {
                                    task.status === "Completed" ? <del>{task.description}</del> : <span>{task.description}</span>
                                 }   
                                
                                 {/* Show radio button for Active tasks */}
                                    <input
                                        type="radio"
                                        onChange={() => markInProgress(task.id)}
                                        checked = {task.status === "In Progress"|| task.status === "Completed"}
                                    />
                               
                            </li>
                    )
                })
            }
        </TaskContainer>
    )
}
export default AllTask;