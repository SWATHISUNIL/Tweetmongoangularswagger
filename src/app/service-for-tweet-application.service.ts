import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';  
import { Register } from "../app/register"; 


import { Tweets } from "../app/tweets"; 
import { Viewallusers } from './viewallusers';
@Injectable({
  providedIn: 'root'
})
export class ServiceForTweetApplicationService {
  Url :string;  
  //token :string; 
  header : any; 
  activeUser : Viewallusers= {};

  constructor(private http : HttpClient) { 
    this.Url = 'http://localhost:5000/api/';  
  
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings); 
    

  }
  Login(model : any){  
    debugger;  
     var a =this.Url+'UserLogin';  
   return this.http.post<any>(this.Url+'User/login',model,{ headers: this.header});  
  }  
   CreateUser(register:Register)  
   {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<Register[]>(this.Url + 'User/Register', register, httpOptions)  
   } 
   getUser(): Observable<any> {
    return this.http.get(this.Url + 'User/GetAllUsers' )
  } 
  getTweets(user : Viewallusers): Observable<any> {
    return this.http.get(this.Url + 'Tweet/GetAllTweetByUserId/'+ user.userId)
  } 
  addTweet(tweets:Tweets)  
  {  
   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
   return this.http.post<Tweets[]>(this.Url + 'Tweet/AddTweet', tweets, httpOptions)  
  } 
  getAllTweets(): Observable<any> {
    return this.http.get(this.Url + 'Tweet/GetAllTweets')
  } 
}



