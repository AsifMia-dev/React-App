import { useState } from "react";
import Button from "../Components/Button";

function CreateTask({greet}){
    const [task, setTask] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (task.trim() === ""){
           alert("Enter your Task");
           return;
        } 
        greet(task);
        setTask('');
        
    }
    return(
        <>
            <div className="w-[50%] mx-auto mt-10 bg-gray-200 h-auto rounded-lg shadow py-2 ">
                <h1 className="px-4 text-lg font-mono font-bold">Add New Task</h1>
                <div className="container mx-auto px-4 py-2">
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <label htmlFor="task_description" className="text-md font-mono font-light">Task Description</label>
                       <input 
                            id="task_description"
                            name="task_description"
                            type ="text"
                            value={task} // Controlled input
                            placeholder="What need to be done? "
                            className="w-[80%] h-9 p-2 border border-black rounded-md  focus:ring-blue-500"
                            onChange={(e)=>{
                                setTask(e.target.value);
                            }}
                        /> 
                        <button  type="submit" className="bg-blue-500 w-[80%] py-1 rounded mt-2 cursor-pointer">Add</button>

                    </form>
                </div>
            </div>
        </>
    );
}
export default CreateTask;