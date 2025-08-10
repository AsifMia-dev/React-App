import {useNavigate } from "react-router-dom";
import InputGroup from "../Components/InputGroup"
import Button from "../Components/Button";


function Login(){
    const navigate = useNavigate();
    return(
        
        <div className="container w-[40%] bg-gray-50 h-auto mx-auto border rounded mt-[5%] shadow">
            <h1 className="flex justify-center text-2xl mt-5">Login</h1>
            <div className="flex flex-col items-center gap-y-4 ">
                <InputGroup 
                label="User Name" 
                placeholder="Place your user name" 
                type="text" 
                />
                <InputGroup 
                label="Password" 
                placeholder="Place your password" 
                type="text" 
                />
                <button className="w-[79%] bg-blue-500 py-2 rounded cursor-pointer hover:bg-blue-600">Login</button>
                <div class="text-sm mb-4 text-gray-600">
                    Don’t have an account? 
                    <button 
                        class="ml-1 text-blue-500 font-medium hover:underline hover:text-blue-700 transition-colors duration-200 cursor-pointer"
                        onClick={() =>{
                            navigate("/register")
                        }}
                    >
                        Register first
                    </button>
                </div>


                  
            </div>
        </div>

    )
}

export default Login;