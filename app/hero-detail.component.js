<<<<<<< HEAD
System.register(['angular2/core'], function(exports_1) {
=======
System.register(['angular2/router', './hero.service', 'angular2/core'], function(exports_1) {
>>>>>>> master
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
<<<<<<< HEAD
    var core_1;
    var HeroDetailComponent;
    return {
        setters:[
=======
    var router_1, hero_service_1, core_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
>>>>>>> master
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
<<<<<<< HEAD
                function HeroDetailComponent() {
                }
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        template: "\n    <div *ngIf=\"hero\">\n      <h2>{{hero.name}} details!</h2>\n      <div><label>id: </label>{{hero.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  ",
                        inputs: ['hero']
                    }), 
                    __metadata('design:paramtypes', [])
=======
                function HeroDetailComponent(_heroService, _routeParams) {
                    this._heroService = _heroService;
                    this._routeParams = _routeParams;
                }
                HeroDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                HeroDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('bb');
                    var id = +this._routeParams.get('id');
                    console.log('aa', id);
                    this._heroService.getHero(id)
                        .then(function (hero) { return _this.hero = hero; });
                };
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        template: "\n  <div *ngIf=\"hero\">\n    <h2>{{hero.name}} details!</h2>\n    <div><label>id: </label>{{hero.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n    </div>\n\t\t<button (click)=\"goBack()\">Back</button>\n  </div>\n",
                        inputs: ['hero']
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.RouteParams])
>>>>>>> master
                ], HeroDetailComponent);
                return HeroDetailComponent;
            })();
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
//# sourceMappingURL=hero-detail.component.js.map