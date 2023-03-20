import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  loginAccount:any;
  message:any;

  loginArray=[
    {
      username:'sangamesh',
      password:'341',
    },
    {
      username:'soham',
      password:'342',
    },
    {
      username:'bhat',
      password:'357',
    },
    {
      username:'omsai',
      password:'346',
    },
    {
      username:'q',
      password:'q',
    },
  ]

  constructor() { }

  validateLogin(username:string,password:string){
    for(let i=0;i<this.loginArray.length;i++)
    {
      if(username==this.loginArray[i].username && password==this.loginArray[i].password)
      {
        this.loginAccount=this.loginArray[i];
        return 200
      }
    }

    return 403;
  }
}
