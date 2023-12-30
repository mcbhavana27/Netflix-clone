import { Injectable } from '@angular/core';
// import 'localstorage-polyfill';
// global['localStorage'] = localStorage;


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor() { }

  

  login(email:string, password:string){
    // here we will call our backend api but as we are not making a real prodcut we will just 
    // login user here
    // suppose we have sucessfully logged in and got a token from the server
    // we will store the token in localstorage
    localStorage.setItem("token",Math.random()+"");
  }
  get isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}