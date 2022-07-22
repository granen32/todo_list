import React, { useState } from 'react';
const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todoError , settodoError] = useState("");
  const onChange = (event:React.FormEvent<HTMLInputElement>) =>{
    const{
      currentTarget : {value}
    } = event;
    settodoError("");
    setTodo(value);
  }
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    console.log(todo);
    if(todo.length < 8){
      return settodoError("to do should be longer")
    }
    console.log("submit");
  }
  return (
    <>
    <div>
      <form action="" onSubmit={onSubmit}>
        <input 
        type="text" 
        placeholder='write a todo'
        value={todo} 
        onChange={onChange}
        />
        <button type='button'>add</button>
        {todoError !== "" ? todoError : null}
      </form>
    </div>
    </>
  )
}

export default TodoList