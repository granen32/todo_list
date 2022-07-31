// 투두리스트 폼 데이타
export interface FormEdata {
  errors : {
    email:{
      message : string;
    }
  },
  FirstName : string;
  LastName : string;
  Email : string;
  Password : string;
  PasswordConfirm : string;
  UserName: string;
  // 에러 생성 메세지 생ㅓ
  extraError? : string;
}

// todo list
export interface TodoListProps {
  toDo : string
}
// settodo
export interface TodoListTypeProps {
  text : string,
  id : number,
  category : "DOEN" | "DONE" | "TO_DO";
}