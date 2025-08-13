import Button from "../Components/Button";

function TaskButtonGroup({active,onClick}){
     const buttons = ["Active", "In Progress", "Completed"];

    return(
        <div className="flex flex-row gap-x-2 ">
            {
                buttons.map((name)=>{
                    return(

                        <Button 
                            buttonName={name}
                            onClick={() => onClick(name)}
                            buttonType={name === active ? 'success':'secondary'}
                        />
                    );
                })
            }
        </div>
    );
};

export default TaskButtonGroup;