import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import {
  TodoListProps,
  TodoListTypeProps
} from "../../@types/global" 
import { atom, useRecoilState } from 'recoil'

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

const todoState = atom<TodoListTypeProps[]>({
  key : "toDo",
  default: [],
})


const TodoList = () => {
  const [toDos, setTodos] = useRecoilState(todoState);
  // usehookform
  const {
    register,
    handleSubmit,
    setValue
  } = useForm<TodoListProps>();
  const handleValid = ({toDo}:TodoListProps) =>{
    setTodos(oldTodos => [{text:toDo, id:Date.now(),category:"TO_DO"}, ...oldTodos])
    setValue("toDo", "");
  }
  return (
    <>
      <TodoBox>
        <h1>To Dos</h1>
        <form onSubmit={handleSubmit(handleValid)}>
          <input 
          type="text"
          {...register("toDo",{
            required: "Please write a Todo"
          })}
          placeholder="할 거 써줘"
          />
          <button>Add</button>
        </form>
        <ul>
          {toDos.map((toDo) => (
            <li key={toDo.id}>{toDo.text}</li>
          ))}
        </ul>
      </TodoBox>
    </>
  )
}

export default TodoList;