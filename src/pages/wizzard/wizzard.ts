import { Component } from '@angular/core';
import {DashboardPage} from '../dashboard/dashboard';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {GoalProvider} from '../../providers/goal/goal';

/**
 * Generated class for the WizzardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wizzard',
  templateUrl: 'wizzard.html',
})
export class WizzardPage {
  public actions: any[] = [];
  public currentStep:number = 1;
  public goal:any = {
    goalName: "",
    goalDescription: "",
    goalPoints: null,
    goalCategory: "",
    goalActions: [],
    goalStartDate: null,
    goalEndDate: null
  }

public firstStepForm : FormGroup = this.formBuilder.group({
      goalName: ['', Validators.required],
      goalDescription: ['', Validators.required],
      goalPoints: ['', Validators.required]
    });

public thirdStepForm : FormGroup = this.formBuilder.group({
      actionLabel: ['', Validators.required],
      actionPoints: ['', Validators.required]
    });
public fourthStepForm : FormGroup = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });

  constructor(public goalService: GoalProvider, public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public toastCtrl: ToastController) {

      let goalObject = navParams.get("goalObject");
      console.log(goalObject);
      if(goalObject !== undefined){
        this.firstStepForm.controls["goalName"].setValue(goalObject.goalName);
        this.firstStepForm.controls["goalDescription"].setValue(goalObject.goalDescription);
        this.firstStepForm.controls["goalPoints"].setValue(goalObject.goalPoints);
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WizzardPage');
  }

  public nextStep(step:number):void{
    switch(step){
      case 1:{
        if(this.firstStepForm.valid){
          this.goal.goalName = this.firstStepForm.controls["goalName"].value;
          this.goal.goalPoints = this.firstStepForm.controls["goalPoints"].value;
          this.goal.goalDescription = this.firstStepForm.controls["goalDescription"].value;
          this.currentStep ++;
        }else{
          this.presentToast("Voer a.u.b. alle verplichte velden in.");
        }
        break;
      }
      case 2 :{
        this.currentStep ++;
        break;
      }
      case 3:{
        if(this.actions.length == 0){
          this.presentToast("Je moet minimaal 1 actie invoeren.");
        }else{
          this.goal.actions = this.actions;
          this.currentStep ++;
        }
        break;
      }
      case 4 : {
      if(this.fourthStepForm.valid){
        this.goal.goalStartDate = this.fourthStepForm.controls["startDate"].value;
        this.goal.goalEndDate = this.fourthStepForm.controls["endDate"].value;
        this.goalService.addGoal(this.goal);
        this.presentToast("Doel succesvol aangemaakt.");
        this.navCtrl.pop();
        break;
      }else{
        this.presentToast("Kies een geldige eind en startdatum.");
        break;
      }
      }
      default: {
        break;
      }
    }
  }

public AddAction():void{
  this.actions.push({
    actionLabel: this.thirdStepForm.controls["actionLabel"].value,
    actionPoints: this.thirdStepForm.controls["actionPoints"].value
  });
  this.thirdStepForm.controls["actionLabel"].setValue("");
  this.thirdStepForm.controls["actionPoints"].setValue("");
}
public registerCategory(category:string):void{
  this.goal.category = category;
  this.currentStep ++;
}

  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  public routeHome():void{
    this.navCtrl.pop();
  }
}
