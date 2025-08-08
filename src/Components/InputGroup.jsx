
function InputGroup({label, type, placeholder = ''}){
    return (
        <>
            <label className="block mb-2 text-bold text-shadow-black ">{label}</label>
            <input 
                typ = {type}
                placeholder={placeholder}
                className="w-[30rem] h-9 p-2 border border-gray-300 rounded-md  focus:ring-blue-500"
            />
        </>
    );      
}

export default InputGroup;