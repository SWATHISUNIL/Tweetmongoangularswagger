import { Component, OnInit } from '@angular/core';
import { ServiceForTweetApplicationService } from '../service-for-tweet-application.service';    
import {Tweets} from '../tweets';    
import {Observable} from 'rxjs';  
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.css']
})
export class AddTweetComponent implements OnInit {

  data = false;    
  UserForm: any={};   
  massage!: String; 
  TweetContent : any={};

  constructor(private formbulider: FormBuilder,private tweetService:ServiceForTweetApplicationService) { }

  ngOnInit() {  
    
      this.UserForm = this.formbulider.group({    
        tweetMsg: ['', [Validators.required]], 

        //userId: ['', [Validators.required]],
        // email: ['', [Validators.required]], 
       
        
    });    
  }    
   onFormSubmit()    
  {    
    const tweetcontent = this.TweetContent.value;    
    this.AddTweet();    
  }    
  AddTweet()    
  {    
  this.TweetContent.userId=this.tweetService.activeUser.userId;
  console.log(this.TweetContent.userId);
  this.tweetService.addTweet(this.TweetContent).subscribe(    
    ()=>    
    {    
      
      this.data = true;    
      this.massage = 'Data saved Successfully';    
      this.UserForm.reset();    
    });  
    // this.LoginService.Login(this.model).subscribe(    
    //   data => {    
    //     debugger;    
            
    //       this.LoginService.activeUser=data;  
    //       this.router.navigate(['/ViewAllTweetsByUser',this.LoginService.activeUser.userId]);    
    //       debugger;    
    //      console.log(this.LoginService.activeUser);
    //   },      
  }    
}    

