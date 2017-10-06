import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import {LoginPage} from '../pages/login/login';
import {LoginPageModule} from '../pages/login/login.module';
import {BreakdownPageModule} from '../pages/breakdown/breakdown.module';
import {BreakdownPage} from '../pages/breakdown/breakdown';
import {DashboardPage} from '../pages/dashboard/dashboard';
import {DashboardPageModule} from '../pages/dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import { GoalProvider } from '../providers/goal/goal';
import {WizzardPageModule} from '../pages/wizzard/wizzard.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {LongPressModule} from 'ionic-long-press';
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    HttpModule,
    BreakdownPageModule,
    LoginPageModule,
    DashboardPageModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    WizzardPageModule,
    ReactiveFormsModule,
    FormsModule,
    LongPressModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoalProvider
  ]
})
export class AppModule {}
