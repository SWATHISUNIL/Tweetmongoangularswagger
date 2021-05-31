import { Component, OnInit } from '@angular/core';
import { ServiceForTweetApplicationService } from '../service-for-tweet-application.service'; 

import { Viewallusers } from '../viewallusers';    
   
import {Observable} from 'rxjs';  
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; 
@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {
  repos?: Viewallusers[];
  constructor(private formbulider: FormBuilder,private viewusers:ServiceForTweetApplicationService) { }

   
  ngOnInit() {
    this.viewusers.getUser()
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.repos = response; 
        });

  }

}
