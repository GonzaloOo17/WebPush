import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MessagingService {
currentMessage = new BehaviorSubject(null);

headers= new HttpHeaders({
    'Authorization': 'key=AAAA5LYZeNs:APA91bGHz2GEXd-E3DaAdoYNxPvW9SbMxioFMBH7ZFgiBsoBvj5C8S-Pi7Y51hivON6QD_morIYsEIE_SZZzMhzOfOMZLGCQKgOF73mNY_NifFJfoLEU30_GrgyA_FMw7hrvsyHc3v1x',
    'Content-Type': 'application/json'
})

constructor(private angularFireMessaging: AngularFireMessaging,
            private http: HttpClient) {

}
requestPermission() {
this.angularFireMessaging.requestToken.subscribe(
(token) => {
console.log(token);
},
(err) => {
console.error('Unable to get permission to notify.', err);
}
);
}
receiveMessage() {
this.angularFireMessaging.messages.subscribe(
(payload) => {
console.log("new message received. ", payload);
this.currentMessage.next(payload);
})
}

sendPush(objeto: any){
    return this.http.post('https://fcm.googleapis.com/fcm/send', objeto, {headers: this.headers});
}
}