// 투두리스트 폼 데이타
export interface FormEdata {
  error : {
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
  extraError? : string;
}
