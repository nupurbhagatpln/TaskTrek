import React, {useState} from 'react'

const Card = () => {
    const [count, setCount]=useState(0);
    const [input, setInput]=useState("");
    const taskList=["Task 1", "Task 2","Task 3"];
    function handleTaskInc(){
        counter();
        return setCount(count +1);
    }
    const counter= ()=>{
        if(count===0)
        {
            return "No task available";
        }
        else {
            setCount(count +1);
            return `Counter: ${count}`
        }
    }
    const handleOnChange= (event) => {
        setInput(event.target.value);
    }
  return (
    <>
        <h1>Task {count}</h1>
        <input type="text" onChange={handleOnChange}/>
        <button onClick={handleTaskInc}>Add button </button>
        <h1>Enter Input: {input} </h1>
        <ul>
            {
                taskList.map(task=><li key={task}>{task}</li>)
            }
        </ul>
    </>
    
  )
}

export default Card