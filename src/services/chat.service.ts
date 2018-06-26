import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthService {

		constructor(public afAuth: AngularFireAuth) {
		afAuth.authState.subscribe(user => {
		});
	}

}
