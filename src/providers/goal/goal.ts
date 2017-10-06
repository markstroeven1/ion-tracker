import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';

/*
  Generated class for the GoalProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GoalProvider {

  public goals: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public addGoal(goal:any):void{
    let currentValue = this.goals.getValue();
    goal.icon="assets/img/Bedrijf.png";
    currentValue.push(goal);
    this.goals.next(currentValue);
  }

  constructor(public http: Http) {

  }

  public getGoals():any[]{
    return this.goals.getValue();
  }

}
