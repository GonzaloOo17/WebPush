import { Component, OnInit } from '@angular/core';
import { mergeMap} from 'rxjs/operators';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { MessagingService } from './service/messaging.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SimplyNotify';
  message;

  subscribed: boolean = false;

  object={
    notification: {
      title: "Hey there", 
      body: "Subscribe to might ghost hack youtube channel"
      },
    priority: "high",
    to : ""
  }
  
  // [END get_messaging_object]
  // [START set_public_vapid_key]
  // Add the public key generated from the console here.
  constructor(
              private afMessaging: AngularFireMessaging,
              private service: MessagingService) { }
ngOnInit() {
  this.afMessaging.requestToken
  .subscribe(
    (token) => { 
      console.log('Permission granted! Save to the server!', token); 
      this.object.to = token;
  },
    (error) => { console.loggit ("The user is not subscribed"); },  
  );
 }

 sendPush(){
   this.service.sendPush(this.object)
    .subscribe(data=>{
      console.log(data);
    })
 }

 requestPermission() {
  this.afMessaging.requestToken
    .subscribe(
      (token) => { 
        console.log('Permission granted! Save to the server!', token); 
        this.object.to = token;
    },
      (error) => { console.error(error); },  
    );
}
deleteToken() {
  this.afMessaging.getToken
    .pipe(mergeMap(token => this.afMessaging.deleteToken(token)))
    .subscribe(
      (token) => { console.log('Token deleted!'); },
    );
}

listen() {
  this.afMessaging.messages
    .subscribe((message) => { console.log(message); });
}
}
