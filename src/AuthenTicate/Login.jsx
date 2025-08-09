
import InputGroup from "../Components/InputGroup"
import Button from "../Components/Button";

function Login(){
    return(
        
        <div className="container w-[40%] bg-gray-50 h-auto mx-auto border rounded mt-[5%]">
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
                <div className="mb-5">
                 <Button buttonName="Login" buttonType="primary"/>
                </div>
                  
            </div>
        </div>

    )
}

export default Login;