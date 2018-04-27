import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Users } from '../../models/users';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login_type = "login";
  login_form : any;
  register_form : any;
  password_max_length = 6;
  user = {} as Users;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder : FormBuilder ) {
  this.login_form = this.formBuilder.group({
              email: ['', [Validators.email, Validators.required]],
              password: ['', [Validators.minLength(this.password_max_length),
                              Validators.required],
                            ],
                            });

this.register_form = this.formBuilder.group({
              email: ['', [Validators.email, Validators.required]],
              phone: ['', [Validators.required]],
              password: ['', [Validators.minLength(this.password_max_length),
                              Validators.required]
                              ],
                              });                          
  }

  login(user: Users) {
    console.log(user.email);
    this.navCtrl.push(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
