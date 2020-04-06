import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AsyncPipe } from '../../node_modules/@angular/common';
import { MessagingService } from './service/messaging.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule
  ],
  providers: [ MessagingService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
