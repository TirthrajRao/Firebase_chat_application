import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


// var config = {
//   apiKey: "AIzaSyCE30U69PzmAgsu9_vlCtqYQ5CFN8O0prk",
//   authDomain: "ionic-chat-starter.firebaseapp.com",
//   databaseURL: "https://ionic-chat-starter.firebaseio.com",
//   projectId: "ionic-chat-starter",
//   storageBucket: "ionic-chat-starter.appspot.com",
//   messagingSenderId: "950873202952"
// };

 var config = {
    apiKey: "AIzaSyBkD4J7mbuZ0hOXS7JFLdY0dkk4LBeYZb0",
    authDomain: "chatapp-a8e02.firebaseapp.com",
    databaseURL: "https://chatapp-a8e02.firebaseio.com",
    projectId: "chatapp-a8e02",
    storageBucket: "chatapp-a8e02.appspot.com",
    messagingSenderId: "539589767997"
  };




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
