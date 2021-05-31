import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-usermanual',
  templateUrl: './usermanual.component.html',
  styleUrls: ['./usermanual.component.css']
})
export class UsermanualComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {

  }
  addtweet(){    
    debugger;    
     
         this.router.navigate(['/AddTweetComponent']);    
          

}
ViewAllUsers(){    
  
       this.router.navigate(['/ViewAllUsers']);    
        

}
ViewAllTweets(){    
  
  this.router.navigate(['/ViewAllTweets']);    
   

}


}
