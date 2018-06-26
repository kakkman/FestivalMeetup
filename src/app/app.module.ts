import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FriendsPage } from '../pages/friends/friends';
import { ChecklistPage } from '../pages/checklist/checklist';
import { MapPage } from '../pages/map/map';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from './config';
import { AuthService } from '../services/auth.service';

//additional pages
import { LoginPage } from '../pages/user-authentication/login/login';
import { SignupPage } from '../pages/user-authentication/signup/signup';
import { GroupListPage } from '../pages/groups/group-list/group-list';
import { GroupCreatePage } from '../pages/groups/group-create/group-create';

import { NgxErrorsModule } from '@ultimate/ngxerrors';

@NgModule({
  declarations: [
    MyApp,
    FriendsPage,
    ChecklistPage,
    MapPage,
    TabsPage,
    LoginPage,
    SignupPage,
    GroupListPage,
    GroupCreatePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    NgxErrorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChecklistPage,
    FriendsPage,
    MapPage,
    TabsPage,
    LoginPage,
    SignupPage,
    GroupCreatePage,
    GroupListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthService
  ]
})
export class AppModule {}
