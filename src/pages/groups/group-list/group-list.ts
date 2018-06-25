import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireList } from "angularfire2/database"; //apparently AngularFire has been outdated

import { AuthService } from '../../../services/auth.service';

import * as firebase from 'firebase/app';

import { GroupCreatePage } from '../group-create/group-create';


/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group-list',
  templateUrl: 'group-list.html',
})
export class GroupListPage {

	public groups;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupListPage');
  }

  loadAvailableGroupsForUser()
  {
  	 this.groups = firebase.database().ref('/messages').orderByChild('timestamp');
  }

  createGroup()
  {
  	//this.navCtrl.push()
  }

}
