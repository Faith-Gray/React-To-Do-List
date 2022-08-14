import { useState } from "react";

function ToDoListForm(addTask) {
    const [ formInput, setFormInput ] = useState('');

    function handleChange(e) {
        setFormInput(e.currentTarget.value)
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        addTask(formInput);
        setFormInput("");

        console.log(tasks)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={formInput} type="text" onChange={handleChange} placeholder="Enter task"/>
            <button>Submit</button>
        </form>
    );
};
  
export default ToDoListForm;