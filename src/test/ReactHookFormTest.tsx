import React from 'react';
import { useForm } from 'react-hook-form';
import {
  FormEdata
} from "../../@types/global" 
const TodoList = () => {
  const  {
    register, 
    handleSubmit,
    setError, 
    formState:{errors}} = useForm<FormEdata>({
      defaultValues :{
        Email: "@naver.com"
      }
    });
  // handleSubmit이 validation 을 담당하게됨
  const onValid = (data:FormEdata) =>{
    if(data.Password !== data.PasswordConfirm){
      setError("Password", {
        message : "Password are not the same"
      },{
        shouldFocus :true,
      })
    }
    setError("extraError", {
      message : "server offline."
      // seterror 는 인풋에 강제 포커스가 가능함
    })
  }
  console.log(errors);
  return (
    <>
    <div>
      <form 
      style={{display:"flex", flexDirection: "column"}}
      onSubmit={handleSubmit(onValid)}>
        <input 
        {...register("Email", {
          required: "Email is required", 
          pattern:{
            value:/^[A-Za-z0-9._%+-]+@naver.com/,
            message:"Only naver.com ps"
          }})
        }
        type="text" 
        placeholder="Email"
        />
        <span>{errors?.Email?.message}</span>
        <input 
        {...register("FirstName", {
          required: "FirstName is required",
          validate: {
            noGranen : (value) => value.includes("granen") ? "no granen" : true,
            noGranen32 : (value) => value.includes("granen32") ? "no granen32" : true,

            // validate 함수를 비동기로 만들어서 서버에서 활용도 가능함
          }          
          // value 값에 != 포함되는 "granen"이 있으면 금지할것
        })}
        type="text" 
        placeholder="FirstName"
        />
        <span>{errors?.FirstName?.message}</span>
        <input 
        {...register("LastName", {required: "LastName is required"})}
        type="text" 
        placeholder="LastName"
        />
        <span>{errors?.LastName?.message}</span>
        <input 
        {...register("UserName", {required: "UserName is required", minLength:5})}
        type="text" 
        placeholder="UserName"
        />
        <span>{errors?.UserName?.message}</span>
        <input 
        {...register("Password", {required: "Password is required", minLength:5})}
        type="text" 
        placeholder="Password"
        />
        <span>{errors?.Password?.message}</span>
        <input 
        {...register("PasswordConfirm", {required: "Password is required",
        minLength:{
          value:5,
          message : "your password is short"
        }})}
        type="text" 
        placeholder="PasswordConfirm"
        />
        <span>{errors?.PasswordConfirm?.message}</span>
        <button type='submit'>add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
    </>
  )
}

export default TodoList