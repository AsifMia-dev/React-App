
function AllTask({tasks}){
    return(
         <div className="container mx-auto mt-10 bg-gray-200 h-auto w-full"> 
                   {tasks.map((task, index) => {
                    return (
                        <li
                            className="bg-gray-500 px-4 pt-2 text-black w-full h-10 list-none mb-0.5 rounded hover:bg-gray-400"
                        >
                            {task}
                        </li>
                    );
                })}
        

            </div>
    )
}
export default AllTask;