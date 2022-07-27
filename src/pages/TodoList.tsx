import React from 'react';
import { useForm } from 'react-hook-form';
const TodoList = () => {
  const  {register, handleSubmit, formState} = useForm();
  // handleSubmit이 validation 을 담당하게됨
  const onValid = (data:any) =>{
    console.log(data);
  }
  console.log(formState.errors)
  return (
    <>
    <div>
      <form 
      style={{display:"flex", flexDirection: "column"}}
      onSubmit={handleSubmit(onValid)}>
        <input 
        {...register("Email", {
          required: true, 
          pattern:{
            value:/^[A-Za-z0-9._%+-]+@naver.com/,
            message:"Only naver.com ps"
          }})
        }
        type="text" 
        placeholder="Email"
        />
        <input 
        {...register("FirstName", {required: true})}
        type="text" 
        placeholder="FirstName"
        />
        <input 
        {...register("LastName", {required: true})}
        type="text" 
        placeholder="LastName"
        />
        <input 
        {...register("UserName", {required: true, minLength:10})}
        type="text" 
        placeholder="UserName"
        />
        <input 
        {...register("Password", {required: true, minLength:5})}
        type="text" 
        placeholder="Password"
        />
        <input 
        {...register("PasswordConfirm", {required: "Password is required",
        minLength:{
          value:5,
          message : "your password is short"
        }})}
        type="text" 
        placeholder="PasswordConfirm"
        />
        <button type='submit'>add</button>
      </form>
    </div>
    </>
  )
}

export default TodoList