import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceForTweetApplicationService } from '../service-for-tweet-application.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  model : any={};    
    
  errorMessage?: string;    
  constructor(private router:Router,private LoginService:ServiceForTweetApplicationService) { } 
  

  ngOnInit() {    
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();    
  }  
  btnClick(){    
   
    this.router.navigateByUrl('/login'); 
    
}
btnClickRegister()
{
  this.router.navigateByUrl('/AddUser'); 
}
}
