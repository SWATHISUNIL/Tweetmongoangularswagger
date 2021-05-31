import { Component, OnInit } from '@angular/core';
import { ServiceForTweetApplicationService } from '../service-for-tweet-application.service';    
import {Register} from '../register';    
import {Observable} from 'rxjs';  
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data = false;    
  UserForm: any;    
  massage!: String; 

  constructor(private formbulider: FormBuilder,private loginService:ServiceForTweetApplicationService) { }

  ngOnInit() {    
      this.UserForm = this.formbulider.group({    
        firstName: ['', [Validators.required]],    
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required]], 
        // LoginId: ['', [Validators.required]],     
        password: ['', [Validators.required]],   
        // ConfirmPassword: ['', [Validators.required]],    
        // ContactNumber: ['', [Validators.required]],
        
    });    
  }    
   onFormSubmit()    
  {    
    const user = this.UserForm.value;    
    this.Createemployee(user);    
  }    
  Createemployee(register:Register)    
  {    
  this.loginService.CreateUser(register).subscribe(    
    ()=>    
    {    

      this.data = true;    
      this.massage = 'Data saved Successfully';    
      this.UserForm.reset();    
    });    
  }    
}    
