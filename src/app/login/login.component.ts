import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceForTweetApplicationService } from '../service-for-tweet-application.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model : any={};    
    
  errorMessage?: string;    
  constructor(private router:Router,private LoginService:ServiceForTweetApplicationService) { } 
  

  ngOnInit() {    
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();    
  }  
  login(){    
    debugger;    
    this.LoginService.Login(this.model).subscribe(    
      data => {    
        debugger;    
         this.router.navigate(['/User']);    
          this.LoginService.activeUser=data;  

          //this.router.navigate(['/ViewAllTweetsByUser',this.LoginService.activeUser.userId]);    
          debugger;    
         console.log(this.LoginService.activeUser);
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
  };    

}
