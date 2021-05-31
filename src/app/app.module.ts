import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ViewalltweetsbyuserComponent } from './viewalltweetsbyuser/viewalltweetsbyuser.component';
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';  
import { MatButtonModule} from '@angular/material/button'; 
import { MatToolbarModule} from '@angular/material/toolbar'; 
import{MatInputModule} from '@angular/material/input';
import { UsermanualComponent } from './usermanual/usermanual.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule, WavesModule, CardsModule } from 'angular-bootstrap-md';
import { ViewalltweetsComponent } from './viewalltweets/viewalltweets.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ViewAllUsersComponent,
    ViewalltweetsbyuserComponent,
    AddTweetComponent,
    MainpageComponent,
    UsermanualComponent,
    ViewalltweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    FlexLayoutModule,
   ButtonsModule,
   WavesModule,
   CardsModule
    
  ],
  exports: [MatButtonModule,MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
