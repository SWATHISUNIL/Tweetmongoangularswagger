import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';    
import { RegisterComponent } from './register/register.component';  
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ViewalltweetsbyuserComponent } from './viewalltweetsbyuser/viewalltweetsbyuser.component';
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import {MainpageComponent}from './mainpage/mainpage.component';
import {UsermanualComponent}from './usermanual/usermanual.component';
import {ViewalltweetsComponent}from './viewalltweets/viewalltweets.component';

const routes: Routes = [
  {    
    path: 'Main',    
    component: MainpageComponent,    
    data: {    
      title: 'Main Page'    
    }    
  },
  {    
    path: 'login',    
    component: LoginComponent,    
    data: {    
      title: 'Login Page'    
    }    
  },  
  {    
    path: 'User',    
    component: UsermanualComponent,    
    data: {    
      title: 'User Page'    
    }    
  }, 
  {    
    path: 'AddUser',    
    component: RegisterComponent,    
    data: {    
      title: 'Add User Page'    
    }    
  },  
  {    
    path: 'ViewAllUsers',    
    component: ViewAllUsersComponent,    
    data: {    
      title: 'View All Users Page'    
    }    
  },  
  {    
    path: 'ViewAllTweetsByUser/:id',    
    component: ViewalltweetsbyuserComponent,    
    data: {    
      title: 'View All Tweets By User Page'    
    }    
  }, 
  {    
    path: 'AddTweetComponent',    
    component: AddTweetComponent,    
    data: {    
      title: 'Post Tweet Page'    
    }    
  }, 
  {    
    path: 'ViewAllTweets',    
    component: ViewalltweetsComponent,    
    data: {    
      title: 'All Tweet Page'    
    }    
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
