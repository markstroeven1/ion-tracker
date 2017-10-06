import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {WizzardPage} from '../wizzard/wizzard';

/**
 * Generated class for the BreakdownPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-breakdown',
  templateUrl: 'breakdown.html',
  animations: [
    trigger('editMode', [
        state('inactive', style({
          "border": '2px solid white'
        })),
        state('active',   style({
          "border": '4px solid #FF7562'
        })),
        transition('inactive => active', animate('300ms linear')),
        transition('active => inactive', animate('300ms linear'))
      ]),
      trigger('breakdown', [
          state('inactive', style({
            "height": '0px'
          })),
          state('active',   style({
            "height": 'auto'
          })),
          transition('inactive => active', animate('500ms linear')),
          transition('active => inactive', animate('500ms linear'))
        ])
  ]
})
export class BreakdownPage {
  public state: string = "inactive";
  public breakDownState: string = "inactive"
  public breakdownActive: boolean = false;
  public actions : any = [{},{},{}];
  public goalObject: any = undefined;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.goalObject = navParams.get("goalObject");
  }

  public toggleEditMode():void{
    this.state = this.state == "active" ? "inactive":"active";
  }

  public toggleBreakdownActive():void{
    this.breakDownState = this.breakDownState == "active" ? "inactive":"active";
  }

  public routeHome():void{
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BreakdownPage');
  }

  public editGoal(goalObject:any):void{
    this.navCtrl.push(WizzardPage, {
      goalObject: goalObject
    });
  }
}
