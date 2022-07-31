import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import {
  TodoListProps
} from "../../@types/global" 

const TodoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 20px auto;
  form{
    display: block;
    input{
      display: block;
      width: 100%;
    }
  }
`;

const TodoList = () => {
  const {
    register,
    handleSubmit
  } = useForm<TodoListProps>();
  const handleValid = (data:TodoListProps) =>{
    console.log('add to do', data.toDo)
  }
  return (
    <>
      <TodoBox>
        <form onSubmit={handleSubmit(handleValid)}>
          <input 
          type="text"
          {...register("toDo")}
          placeholder="할 거 써줘"
          />
          <button>Add</button>
        </form>
      </TodoBox>
    </>
  )
}

export default TodoList