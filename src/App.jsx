import { useState } from 'react'
import './App.css'
import ToDo from './ToDo'
import ToDoList from './ToDoList'

function App() {
  const [toDoList, setToDoList] = useState(addTask)


  const handleToggle = (key) => {
    let mapped = ToDoList.map(task => {
      return task.id == key ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  )
}

export default App


//to do list
// get user input from form
//save user input as task with the default as not complete
//Have ToDO component and ToDOList component map through the individual to-do content and todo's


//set state to update
//import the form, import ToDoList
// add functionality for the button to submit, delete button, and the complete checkbox
