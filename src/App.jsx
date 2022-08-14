import { useState } from 'react';
import './App.css';
import ToDoListForm from './ToDoListForm';
import ToDoList from './ToDoList';
import data from "./data.json"

//take out data boilerplate after adding css style

function App() {
  const [ toDoList, setToDoList ] = useState(data);


  const handleToggle = (id) => {
    let mapped = ToDoList.map((task) => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (formInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: formInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoListForm addTask={addTask}/>
    </div>
  )
}

export default App;


//to do list
// get user input from form
//save user input as task with the default as not complete
//Have ToDO component and ToDOList component map through the individual to-do content and todo's


//set state to update
//import the form, import ToDoList
// add functionality for the button to submit, delete button, and the complete checkbox
