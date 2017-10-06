import { Component, AfterViewInit , Output, EventEmitter} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BreakdownPage} from '../breakdown/breakdown';
import {WizzardPage} from '../wizzard/wizzard';
import {GoalProvider} from '../../providers/goal/goal';
import {Gesture} from 'ionic-angular/gestures/gesture';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  animations:[
    trigger('sneekPeak', [
        state('inactive', style({
          "max-height": '0%'
        })),
        state('active',   style({
          "max-height": '100%'
        })),
        transition('inactive => active', animate('300ms linear')),
        transition('active => inactive', animate('300ms linear'))
      ]),
      trigger('fade', [
          state('inactive', style({
            "opacity": '0'
          })),
          state('active',   style({
            "opacity": '1'
          })),
          transition('inactive => active', animate('100ms linear')),
          transition('active => inactive', animate('100ms linear'))
        ]),
  ]
})
export class DashboardPage implements AfterViewInit {
  public state = 'inactive';
  public swipe : any = {};
  public currImage : number = 0;
  pressGesture: Gesture;
  @Output()
  longPress: EventEmitter<any> = new EventEmitter();
  public showSneakPeek: boolean = false;
public indices = [0,1,2,3,4,5,6,7];
public selectedIndex = 0;
public handleClick(index):void{
  this.selectedIndex = index;
  console.log("Hallo");
  this.showSneakPeek = !this.showSneakPeek;
  this.state = this.state == 'active' ? 'inactive': 'active';
}
  ngAfterViewInit(){

  }


public pressed(event: any):void{
  console.log("pressed");
  this.state = "active";
}
public released():void{
  console.log("released");
  this.state = "inactive";
}
public stateChanageSwipe(event:any){
  console.log("swipe");
    this.swipe = event;
  if(event.direction == 16){
    console.log("downswipe");
    this.state = "inactive";
  }
}

public carouselChange (event:any): void{
  this.swipe = event;
  var carousel = document.querySelector('.carousel');
  var figure = carousel.querySelector('figure');
  var nav = carousel.querySelector('nav');
  var numImages = figure.childElementCount;
  var theta =  2 * Math.PI / numImages;
  this.state = "inactive";
  if(event.direction == 2){
    this.currImage++;
  }else{
    this.currImage--;
  }
  figure.style.transform = `rotateY(${this.currImage * -theta}rad)`;
}

  public goals:any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public goalService: GoalProvider) {
    this.goals = goalService.getGoals();
  }

  public transform():void{
    console.log("Woop");
    this.state = this.state == "active"? "inactive":"active";
  }
public enterGoal(goal:any):void{
  this.state="inactive";
  if(goal === undefined){
    this.navCtrl.push(WizzardPage);
  }else{
    this.navCtrl.push(BreakdownPage, {
      goalObject: goal
    });
  }
}
}
