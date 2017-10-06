webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizzardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_goal_goal__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WizzardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WizzardPage = (function () {
    function WizzardPage(goalService, navCtrl, navParams, formBuilder, toastCtrl) {
        this.goalService = goalService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.actions = [];
        this.currentStep = 1;
        this.goal = {
            goalName: "",
            goalDescription: "",
            goalPoints: null,
            goalCategory: "",
            goalActions: [],
            goalStartDate: null,
            goalEndDate: null
        };
        this.firstStepForm = this.formBuilder.group({
            goalName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            goalDescription: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            goalPoints: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.thirdStepForm = this.formBuilder.group({
            actionLabel: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            actionPoints: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.fourthStepForm = this.formBuilder.group({
            startDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            endDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        var goalObject = navParams.get("goalObject");
        console.log(goalObject);
        if (goalObject !== undefined) {
            this.firstStepForm.controls["goalName"].setValue(goalObject.goalName);
            this.firstStepForm.controls["goalDescription"].setValue(goalObject.goalDescription);
            this.firstStepForm.controls["goalPoints"].setValue(goalObject.goalPoints);
        }
    }
    WizzardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WizzardPage');
    };
    WizzardPage.prototype.nextStep = function (step) {
        switch (step) {
            case 1: {
                if (this.firstStepForm.valid) {
                    this.goal.goalName = this.firstStepForm.controls["goalName"].value;
                    this.goal.goalPoints = this.firstStepForm.controls["goalPoints"].value;
                    this.goal.goalDescription = this.firstStepForm.controls["goalDescription"].value;
                    this.currentStep++;
                }
                else {
                    this.presentToast("Voer a.u.b. alle verplichte velden in.");
                }
                break;
            }
            case 2: {
                this.currentStep++;
                break;
            }
            case 3: {
                if (this.actions.length == 0) {
                    this.presentToast("Je moet minimaal 1 actie invoeren.");
                }
                else {
                    this.goal.actions = this.actions;
                    this.currentStep++;
                }
                break;
            }
            case 4: {
                if (this.fourthStepForm.valid) {
                    this.goal.goalStartDate = this.fourthStepForm.controls["startDate"].value;
                    this.goal.goalEndDate = this.fourthStepForm.controls["endDate"].value;
                    this.goalService.addGoal(this.goal);
                    this.presentToast("Doel succesvol aangemaakt.");
                    this.navCtrl.pop();
                    break;
                }
                else {
                    this.presentToast("Kies een geldige eind en startdatum.");
                    break;
                }
            }
            default: {
                break;
            }
        }
    };
    WizzardPage.prototype.AddAction = function () {
        this.actions.push({
            actionLabel: this.thirdStepForm.controls["actionLabel"].value,
            actionPoints: this.thirdStepForm.controls["actionPoints"].value
        });
        this.thirdStepForm.controls["actionLabel"].setValue("");
        this.thirdStepForm.controls["actionPoints"].setValue("");
    };
    WizzardPage.prototype.registerCategory = function (category) {
        this.goal.category = category;
        this.currentStep++;
    };
    WizzardPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    WizzardPage.prototype.routeHome = function () {
        this.navCtrl.pop();
    };
    return WizzardPage;
}());
WizzardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-wizzard',template:/*ion-inline-start:"/Users/markstroeven/Documents/projects/ion tracker/ion-tracker/src/pages/wizzard/wizzard.html"*/'<div class="flex-container centered">\n<img src="assets/img/fwg.png" class="fwg-logo"/>\n</div>\n\n<div class="person">\n  <img src="assets/img/lady.png"/>\n</div>\n\n<div id="singleGoal">\n  <!-- STEP 1 -->\n    <div class="main-container border" *ngIf="currentStep == 1">\n      <form [formGroup]="firstStepForm">\n        <div class="flex-container goal-content">\n            <div class="goal-flex-element-05"></div>\n            <div class="goal-container-top goal-flex-element-5">\n                <div style="display: flex" class="white-text">\n                    <div class="flex-element-5 align-center">\n                        <h6>Nieuw doel aanmaken</h6>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class="flex-container goal-content">\n            <div class="goal-flex-element-05"></div>\n            <div class="goal-container-middle goal-flex-element-5">\n                <div style="display: flex" class="white-text">\n                    <div class="flex-element-5 align-center">\n                        <p class="padded-right">Formuleer een doel waar jij je in herkent en dat ook voor jou haalbaar is.</p>\n                          <ion-input formControlName="goalName" placeholder="" type="text"></ion-input>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class="flex-container goal-content">\n            <div class="goal-flex-element-05"></div>\n            <div class="goal-container-middle goal-flex-element-5">\n                <div style="display: flex" class="white-text">\n                    <div class="flex-element-5 align-center">\n                        <p class="padded-right">Geef je doel een korte omschrijving</p>\n                          <ion-input formControlName="goalDescription" placeholder="" type="text"></ion-input>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class="flex-container goal-content">\n            <div class="goal-flex-element-05"></div>\n            <div class="goal-container-lower goal-flex-element-5">\n                <div style="display: flex" class="white-text">\n                    <div class="flex-element-5 align-center">\n                        <p class="padded-right">Geef in punten aan wat de waarde van dit doel is.</p>\n                          <ion-input formControlName="goalPoints" placeholder="" type="number"></ion-input>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </form>\n    </div>\n\n    <!-- STEP 2 -->\n      <div class="main-container border" *ngIf="currentStep == 2">\n          <div class="flex-container goal-content">\n              <div class="goal-flex-element-05"></div>\n              <div class="goal-container-top goal-flex-element-5">\n                  <div style="display: flex" class="white-text">\n                      <div class="flex-element-5 align-center">\n                          <h6>Nieuw doel aanmaken</h6>\n                      </div>\n                  </div>\n              </div>\n          </div>\n\n          <div class="flex-container goal-content">\n              <div class="goal-flex-element-05"></div>\n              <div class="goal-container-lower goal-flex-element-5">\n                  <div style="display: flex" class="white-text">\n                      <div class="flex-element-5 align-center">\n                          <p class="padded-right">Onder welke categorie valt je doel ?</p>\n                          <ion-list>\n                            <button (click)="registerCategory(\'Intern manifesteren\')" ion-item>\n                              Intern manifesteren\n                            </button>\n                            <button (click)="registerCategory(\'Extern manifesteren\')" ion-item>\n                              Extern manifesteren\n                            </button>\n                            <button (click)="registerCategory(\'Commercieel/financieel\')" ion-item>\n                              Commercieel/financieel\n                            </button>\n                          </ion-list>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n      <!-- STEP 3 -->\n        <div class="main-container border" *ngIf="currentStep == 3">\n            <div class="flex-container goal-content">\n                <div class="goal-flex-element-05"></div>\n                <div class="goal-container-top goal-flex-element-5">\n                    <div style="display: flex" class="white-text">\n                        <div class="flex-element-5 align-center">\n                            <h6>Nieuw doel aanmaken</h6>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class="flex-container goal-content">\n                <div class="goal-flex-element-05"></div>\n                <div class="goal-container-lower goal-flex-element-5">\n                    <div style="display: flex" class="white-text">\n                        <div class="flex-element-5 align-center actions">\n                            <p class="padded-right">Welke acties ga jij nemen om tot dit doel te komen?</p>\n                            <div class="action-line flex-container marginated" *ngFor="let action of actions">\n                              <ion-input disabled placeholder="Actie" class="flex-element-5 action-label" type="text" value="{{action.actionLabel}}"></ion-input>\n                              <ion-input disabled placeholder="0" class="flex-element-1 action-points" type="number" value="{{action.actionPoints}}"></ion-input>\n                            </div>\n                            <div class="action-line">\n                              <form class="flex-container marginated" [formGroup]="thirdStepForm">\n                              <ion-input formControlName="actionLabel" placeholder="Actie" class="flex-element-5 action-label" type="text"></ion-input>\n                              <ion-input formControlName="actionPoints" placeholder="0" class="flex-element-1 action-points" type="number"></ion-input>\n                            </form>\n                            </div>\n                            <button ion-button [disabled]="!thirdStepForm.valid" (click)="AddAction()">Voeg actie toe.</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <!-- Step 4 -->\n        <div class="main-container border" *ngIf="currentStep == 4">\n            <div class="flex-container goal-content">\n                <div class="goal-flex-element-05"></div>\n                <div class="goal-container-top goal-flex-element-5">\n                    <div style="display: flex" class="white-text">\n                        <div class="flex-element-5 align-center">\n                            <h6>Nieuw doel aanmaken</h6>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class="flex-container goal-content">\n                <div class="goal-flex-element-05"></div>\n                <div class="goal-container-lower goal-flex-element-5">\n                    <div style="display: flex" class="white-text">\n                        <div class="flex-element-5 align-center">\n                            <p class="padded-right">Wanneer wil jij dit doel bereikt hebben?</p>\n                            <form [formGroup]="fourthStepForm">\n                            <div class="flex-container">\n                              <ion-item>\n                                <ion-label>startdatum</ion-label>\n                                <ion-datetime formControlName="startDate" displayFormat="DD/MM/YYYY" pickerFormat="DDDD MMMM YYYY" max="2030-01-01"></ion-datetime>\n                              </ion-item>\n                            </div>\n                            <div class="flex-container">\n                              <ion-item>\n                                <ion-label>einddatum</ion-label>\n                                <ion-datetime formControlName="endDate" displayFormat="DD/MM/YYYY" pickerFormat="DDDD MMMM YYYY" max="2030-01-01"></ion-datetime>\n                              </ion-item>\n                            </div>\n                          </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n<div class="wizzard-navigation-bar flex-container">\n  <button ion-button [disabled]="currentStep == 0" class="flex-element-1 wizzard-button" (click)="nextStep(currentStep)"><ion-icon name="arrow-back"></ion-icon></button>\n  <button ion-button class="flex-element-1 wizzard-button" (click)="routeHome()"><ion-icon name="home"></ion-icon></button>\n  <button ion-button  *ngIf="currentStep != 4" class="flex-element-1 wizzard-button" (click)="nextStep(currentStep)"><ion-icon name="arrow-forward"></ion-icon></button>\n  <button ion-button *ngIf="currentStep == 4" class="flex-element-1 wizzard-button" (click)="nextStep(currentStep)">Klaar</button>\n</div>\n\n</div>\n'/*ion-inline-end:"/Users/markstroeven/Documents/projects/ion tracker/ion-tracker/src/pages/wizzard/wizzard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_goal_goal__["a" /* GoalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], WizzardPage);

//# sourceMappingURL=wizzard.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the GoalProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var GoalProvider = (function () {
    function GoalProvider(http) {
        this.http = http;
        this.goals = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
    }
    GoalProvider.prototype.addGoal = function (goal) {
        var currentValue = this.goals.getValue();
        goal.icon = "assets/img/Bedrijf.png";
        currentValue.push(goal);
        this.goals.next(currentValue);
    };
    GoalProvider.prototype.getGoals = function () {
        return this.goals.getValue();
    };
    return GoalProvider;
}());
GoalProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], GoalProvider);

//# sourceMappingURL=goal.js.map

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/breakdown/breakdown.module": [
		211
	],
	"../pages/dashboard/dashboard.module": [
		213
	],
	"../pages/login/login.module": [
		215
	],
	"../pages/wizzard/wizzard.module": [
		184
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 183;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizzardPageModule", function() { return WizzardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wizzard__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WizzardPageModule = (function () {
    function WizzardPageModule() {
    }
    return WizzardPageModule;
}());
WizzardPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__wizzard__["a" /* WizzardPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wizzard__["a" /* WizzardPage */]),
        ],
    })
], WizzardPageModule);

//# sourceMappingURL=wizzard.module.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakdownPageModule", function() { return BreakdownPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breakdown__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BreakdownPageModule = (function () {
    function BreakdownPageModule() {
    }
    return BreakdownPageModule;
}());
BreakdownPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__breakdown__["a" /* BreakdownPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__breakdown__["a" /* BreakdownPage */]),
        ],
    })
], BreakdownPageModule);

//# sourceMappingURL=breakdown.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreakdownPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wizzard_wizzard__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BreakdownPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BreakdownPage = (function () {
    function BreakdownPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.state = "inactive";
        this.breakDownState = "inactive";
        this.breakdownActive = false;
        this.actions = [{}, {}, {}];
        this.goalObject = undefined;
        this.goalObject = navParams.get("goalObject");
    }
    BreakdownPage.prototype.toggleEditMode = function () {
        this.state = this.state == "active" ? "inactive" : "active";
    };
    BreakdownPage.prototype.toggleBreakdownActive = function () {
        this.breakDownState = this.breakDownState == "active" ? "inactive" : "active";
    };
    BreakdownPage.prototype.routeHome = function () {
        this.navCtrl.pop();
    };
    BreakdownPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BreakdownPage');
    };
    BreakdownPage.prototype.editGoal = function (goalObject) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__wizzard_wizzard__["a" /* WizzardPage */], {
            goalObject: goalObject
        });
    };
    return BreakdownPage;
}());
BreakdownPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-breakdown',template:/*ion-inline-start:"/Users/markstroeven/Documents/projects/ion tracker/ion-tracker/src/pages/breakdown/breakdown.html"*/'\n<div class="flex-container centered">\n<img src="assets/img/fwg.png" class="fwg-logo"/>\n</div>\n\n<div id="main-container">\n\n\n<div class="person">\n  <img src="assets/img/lady.png"/>\n</div>\n\n<div class="edit-button" (click)="editGoal(goalObject)">\n<button ion-button>Edit</button>\n</div>\n\n<div id="breakdown" [@editMode]="state">\n\n  <div class="flex-container container-top-bar" (click)="toggleEditMode()" (click)="toggleBreakdownActive()">\n    <div class="flex-element-1">\n      <h6>{{goalObject.goalName}}</h6>\n    </div>\n  </div>\n\n\n  <div class="flex-container container-middle-bar" id="actionbar">\n    <div class="flex-element-1 corner-top-left-goal">\n      <ion-icon ios="ios-help-buoy" md="md-help-buoy"></ion-icon>\n    </div>\n    <div class="flex-element-5 corner-top-right-goal">\n      <h4>Doel</h4>\n      <p>{{goalObject.goalDescription}}</p>\n    </div>\n  </div>\n\n\n  <div class="flex-container container-middle-bar">\n    <div class="flex-element-1 corner-top-left-action">\n      <ion-icon ios="ios-help-buoy" md="md-help-buoy"></ion-icon>\n    </div>\n    <div class="flex-element-5 corner-top-right-action">\n      <h4>Acties</h4>\n      <p *ngFor="let action of goalObject.actions; let i = index"><span>{{i+1}} </span>{{action.actionLabel}}</p>\n    </div>\n  </div>\n\n  <div class="flex-container container-middle-bar" *ngFor="let action of goalObject.actions">\n    <div [@breakdown]="breakDownState" class="flex-element-1 actions corner-top-left-action">\n      <p>{{action.actionPoints}}</p>\n    </div>\n    <div [@breakdown]="breakDownState" class="flex-element-5 actions corner-top-right-action">\n      <p>{{action.actionLabel}}</p>\n    </div>\n  </div>\n\n\n  <div class="flex-container container-bottom-bar">\n    <div class="flex-element-1 corner-bottom-left">\n      <ion-icon ios="ios-help-buoy" md="md-help-buoy"></ion-icon>\n    </div>\n    <div class="flex-element-5 corner-bottom-right">\n      <h4>Einddatum</h4>\n      <p>{{goalObject.goalEndDate}}</p>\n    </div>\n  </div>\n</div>\n</div>\n<div class="wizzard-navigation-bar flex-container">\n  <button *ngIf="state==\'inactive\'" ion-button class="flex-element-1 wizzard-button" (click)="routeHome()">  <ion-icon name="arrow-back"></ion-icon></button>\n  <button *ngIf="state==\'active\'" ion-button class="flex-element-1 wizzard-button" (click)="toggleEditMode()">  <ion-icon ios="ios-close" md="md-close"></ion-icon></button>\n  <button ion-button class="flex-element-1 wizzard-button" (click)="routeHome()"><ion-icon name="home"></ion-icon></button>\n  <button ion-button class="flex-element-1 wizzard-button" (click)="nextStep(currentStep)"> <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon></button>\n</div>\n'/*ion-inline-end:"/Users/markstroeven/Documents/projects/ion tracker/ion-tracker/src/pages/breakdown/breakdown.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* trigger */])('editMode', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* style */])({
                    "border": '2px solid white'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* style */])({
                    "border": '4px solid #FF7562'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* animate */])('300ms linear')),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* animate */])('300ms linear'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* trigger */])('breakdown', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* style */])({
                    "height": '0px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* style */])({
                    "height": 'auto'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* animate */])('500ms linear')),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* animate */])('500ms linear'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], BreakdownPage);

//# sourceMappingURL=breakdown.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = (function () {
    function DashboardPageModule() {
    }
    return DashboardPageModule;
}());
DashboardPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
        ],
    })
], DashboardPageModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breakdown_breakdown__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wizzard_wizzard__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_goal_goal__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams, goalService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.goalService = goalService;
        this.state = 'inactive';
        this.swipe = {};
        this.currImage = 0;
        this.longPress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showSneakPeek = false;
        this.indices = [0, 1, 2, 3, 4, 5, 6, 7];
        this.selectedIndex = 0;
        this.goals = [];
        this.goals = goalService.getGoals();
    }
    DashboardPage.prototype.handleClick = function (index) {
        this.selectedIndex = index;
        console.log("Hallo");
        this.showSneakPeek = !this.showSneakPeek;
        this.state = this.state == 'active' ? 'inactive' : 'active';
    };
    DashboardPage.prototype.ngAfterViewInit = function () {
    };
    DashboardPage.prototype.pressed = function (event) {
        console.log("pressed");
        this.state = "active";
    };
    DashboardPage.prototype.released = function () {
        console.log("released");
        this.state = "inactive";
    };
    DashboardPage.prototype.stateChanageSwipe = function (event) {
        console.log("swipe");
        this.swipe = event;
        if (event.direction == 16) {
            console.log("downswipe");
            this.state = "inactive";
        }
    };
    DashboardPage.prototype.carouselChange = function (event) {
        this.swipe = event;
        var carousel = document.querySelector('.carousel');
        var figure = carousel.querySelector('figure');
        var nav = carousel.querySelector('nav');
        var numImages = figure.childElementCount;
        var theta = 2 * Math.PI / numImages;
        this.state = "inactive";
        if (event.direction == 2) {
            this.currImage++;
        }
        else {
            this.currImage--;
        }
        figure.style.transform = "rotateY(" + this.currImage * -theta + "rad)";
    };
    DashboardPage.prototype.transform = function () {
        console.log("Woop");
        this.state = this.state == "active" ? "inactive" : "active";
    };
    DashboardPage.prototype.enterGoal = function (goal) {
        this.state = "inactive";
        if (goal === undefined) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__wizzard_wizzard__["a" /* WizzardPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__breakdown_breakdown__["a" /* BreakdownPage */], {
                goalObject: goal
            });
        }
    };
    return DashboardPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], DashboardPage.prototype, "longPress", void 0);
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dashboard',template:/*ion-inline-start:"/Users/markstroeven/Documents/projects/ion tracker/ion-tracker/src/pages/dashboard/dashboard.html"*/'\n\n<div class="flex-container centered">\n<img src="assets/img/fwg.png" class="fwg-logo"/>\n</div>\n\n<div class="carousel">\n    <figure>\n      <div long-press (onLongPress)="pressed()" (onLongPressEnd)="released()" duration="50" (swipe) = "carouselChange($event)"  class="orb" *ngFor="let index of indices" (click)="handleClick(index)">\n        <div *ngIf="goals[index] !== undefined">\n\n        <div class="content">\n          <img src="{{goals[index].icon}}"/>\n          <h4>{{goals[index].goalName}}</h4>\n          <p>{{goals[index].goalPoints}}</p>\n        </div>\n      </div>\n\n\n      <div *ngIf="goals[index] === undefined">\n\n      <div class="content">\n        <img src="assets/img/Empty.png"/>\n        <h4>Nog geen doel</h4>\n        <p>Maak een doel aan!</p>\n      </div>\n    </div>\n    </div>\n    </figure>\n    <!-- <nav>\n        <button ion-button (click)="carouselChange(\'next\')">Prev</button>\n        <button ion-button (click)="carouselChange(\'prev\')">Next</button>\n    </nav> -->\n</div>\n\n<div id="sneakPeak" [@sneekPeak]="state" style="text-align: center;">\n  <div class="content" [@fade]="state">\n  <div *ngIf="goals[selectedIndex]!==undefined">\n  <h4>{{goals[selectedIndex].goalName}}</h4>\n  <!-- <p>{{goals[selectedIndex].description}}</p> -->\n  <button ion-button (click)="enterGoal(goals[selectedIndex])">Ga naar doel</button>\n</div>\n\n<div *ngIf="goals[selectedIndex]===undefined">\n<button ion-button class="dashboard-button" (click)="enterGoal(goals[selectedIndex])">Nieuw doel.</button>\n</div>\n</div>\n</div>\n\n<div class="person">\n  <img src="assets/img/lady.png"/>\n</div>\n'/*ion-inline-end:"/Users/markstroeven/Documents/projects/ion tracker/ion-tracker/src/pages/dashboard/dashboard.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* trigger */])('sneekPeak', [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["f" /* style */])({
                    "max-height": '0%'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["f" /* style */])({
                    "max-height": '100%'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["c" /* animate */])('300ms linear')),
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["c" /* animate */])('300ms linear'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* trigger */])('fade', [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["f" /* style */])({
                    "opacity": '0'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["f" /* style */])({
                    "opacity": '1'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["c" /* animate */])('100ms linear')),
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["c" /* animate */])('100ms linear'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_goal_goal__["a" /* GoalProvider */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navController, navParams) {
        this.navController = navController;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.doLogin = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/markstroeven/Documents/projects/ion tracker/ion-tracker/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<div class="flex-container centered">\n<img src="assets/img/fwg.png" class="fwg-logo"/>\n</div>\n<div class="text-container">\n<h1 class="header-title head-text">\n  Made\n</h1>\n<h1 class="header-title head-text">\n    <strong>Monitor</strong>\n</h1>\n</div>\n<div class="container" padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n            <img src="assets/img/Team.png" class="team-image"/>\n            <ion-card class="login-box>">\n              <ion-card-content>\n            <ion-item class="margin-5 flex-element">\n              <ion-input placeholder="Username" type="text"></ion-input>\n            </ion-item>\n          </ion-card-content>\n          <div class="empty-space"></div>\n          <ion-card-content>\n            <ion-item class="margin-5 flex-element">\n              <ion-input placeholder="Password" type="password"></ion-input>\n            </ion-item>\n          </ion-card-content>\n                    <div class="empty-space"></div>\n            <button class="button-login" ion-button full (click)="doLogin()">Login</button>\n          </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n'/*ion-inline-end:"/Users/markstroeven/Documents/projects/ion tracker/ion-tracker/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(267);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login_module__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_breakdown_breakdown_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_goal_goal__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_wizzard_wizzard_module__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_long_press__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_long_press___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ionic_long_press__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__pages_breakdown_breakdown_module__["BreakdownPageModule"],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login_module__["LoginPageModule"],
            __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard_module__["DashboardPageModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/wizzard/wizzard.module#WizzardPageModule', name: 'WizzardPage', segment: 'wizzard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/breakdown/breakdown.module#BreakdownPageModule', name: 'BreakdownPage', segment: 'breakdown', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_12__pages_wizzard_wizzard_module__["WizzardPageModule"],
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_14_ionic_long_press__["LongPressModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__providers_goal_goal__["a" /* GoalProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/markstroeven/Documents/projects/ion tracker/ion-tracker/src/app/app.html"*/'<ion-nav [root]="rootPage" swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/markstroeven/Documents/projects/ion tracker/ion-tracker/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[262]);
//# sourceMappingURL=main.js.map