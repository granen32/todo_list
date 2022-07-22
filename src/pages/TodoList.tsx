import React from 'react';
import { useForm } from 'react-hook-form';
const TodoList = () => {
  const  {register} = useForm();
  console.log(register("todo"));
  return (
    <>
    <div>
      <form action="" >
        <input 
        type="text" 
        placeholder='write a todo'
        />
        <button type='button'>add</button>
      </form>
    </div>
    </>
  )
}

export default TodoList