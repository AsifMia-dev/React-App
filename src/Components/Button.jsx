import Login from "../AuthenTicate/Login";

const type ={
    primary:[
        "bg-blue-500",
        "hover:bg-blue-600",   
    ],   
    secondary:[
        "bg-gray-500", 
        "hover:bg-gray-600",
   
    ],
    success:[
        "bg-green-500",    
        "hover:bg-green-600",
    ],
    danger:[
        "bg-red-500",   
        "hover:bg-red-600", 
    ]
}
function Button({buttonName , buttonType}){
    return(
        <button className= {type[buttonType].join(" ") + "w-3 px-6 py-[5px] text-md rounded-md text-white cursor-pointer"}>{buttonName}</button>
    );
}

export default Button;