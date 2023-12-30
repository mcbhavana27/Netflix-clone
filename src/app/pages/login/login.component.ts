import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../../components/header/header.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})




export class LoginComponent {

 
  bgUrl=BG_IMG_URL;

  email!:string;
  password!:string;

  loginService = inject(LoginService);
  router = inject(Router);
  toasterService=inject(ToastrService)

    // loginService=inject(LoginService);
    // router=inject(Router);

    ngOnInit() {
      if (this.loginService.isLoggedIn) {
        this.router.navigateByUrl('/browse');
      }
    }

  onSubmit(){

    console.log("login:)");

    // validate email and password

    if(!this.email || !this.password)
    {
        this.toasterService.error("provide valid email or password")
        return ;
    }



    // if valid email and password lets login user
    this.loginService.login(this.email, this.password);

    this.toasterService.success("loggedin!")

    this.router.navigateByUrl('/browse');

    // now login done, redirect to browse page

  

  }

}
