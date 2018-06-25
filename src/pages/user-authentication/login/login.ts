import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../landing/tabs/tabs';
import { AuthService } from '../../../services/auth.service';

import { SignupPage } from '../../user-authentication/signup/signup';
import { GroupListPage } from '../../groups/group-list/group-list';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	loginForm: FormGroup;
	loginError: string;

	constructor(private navCtrl: NavController,
				private auth: AuthService,
				fb: FormBuilder) {

		this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
	}

	login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};

		this.auth.signInWithEmail(credentials).then(() => {
			this.navCtrl.setRoot(GroupListPage);
		},
		error => {
			this.loginError = error.message;
		});
	}

	/*loginWithGoogle() {
  this.auth.signInWithGoogle()
    .then(
      () => this.navCtrl.setRoot(HomePage),
      error => console.log(error.message)
    );
	} */

	signup(){
  	this.navCtrl.push(SignupPage);
	}
}