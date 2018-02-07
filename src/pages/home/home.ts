import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  username: string = '';
  auth;
  credentials;

  constructor(public db: AngularFireDatabase,
    public fAuth: AngularFireAuth,
    public navCtrl: NavController,
    private alertCtrl: AlertController) {
    this.auth = {};
    this.credentials = {
      email: "tirthrajbarot2394@gmail.com",
      password: "password"
    }
  }

  showAlert(title: string, message: string) {
    let alertBox = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alertBox.present();
  }

  loginUser(credentials) {
    console.log("AUTH = ",credentials);
    this.fAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(res=>{
      console.log("RESPONSE ",res);
      this.navCtrl.push(ChatPage,{
      username: credentials.email
    });

    }).catch(function(error) {
      console.log("ERROR Signing In !!!",error);
    });
 
    
  }

}
