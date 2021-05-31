import { Component, OnInit } from '@angular/core';
import { ServiceForTweetApplicationService } from '../service-for-tweet-application.service'; 
import { Router, RouterModule, Routes } from '@angular/router';
import { Tweets } from '../tweets';    
   
import {Observable} from 'rxjs';  
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; 
import { Viewallusers } from '../viewallusers';
@Component({
  selector: 'app-viewalltweets',
  templateUrl: './viewalltweets.component.html',
  styleUrls: ['./viewalltweets.component.css']
})
export class ViewalltweetsComponent implements OnInit {

  repos?: Tweets[];
  tweet?:Tweets;
  currentUser?:Viewallusers={};
  constructor(private router: Router,private formbulider: FormBuilder,private tweets:ServiceForTweetApplicationService) {
    this.currentUser=this.tweets.activeUser;
   }
 

  ngOnInit(){  
  this.tweets.getAllTweets()
  .subscribe(
    (response) => {                           //next() callback
      console.log('response received')
      this.repos = response; 
    });

}
}
