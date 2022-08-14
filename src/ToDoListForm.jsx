import { useState } from "react";

function ToDoListForm() {
    const [formInput, setFormInput] = useState('');

    function handleChange(event) {
        const {name, value} = event.target
        setTasks(prevTask => ({
          ...prevTask,
          [name]: value
        }))
      
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        
        console.log(tasks)
    }

    return (
        <div>
 

        </div>
    );
};
  
export default ToDoListForm;