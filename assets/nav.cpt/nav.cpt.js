System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var cptUrl, NavCpt;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            cptUrl = 'assets/nav.cpt/nav.cpt';
            NavCpt = (function () {
                function NavCpt() {
                    this.titleHover = new core_1.EventEmitter();
                    this.titleLeave = new core_1.EventEmitter();
                }
                NavCpt.prototype.getCurrentColor = function (title) {
                    return title._currentColor == undefined ? 'black' : title._currentColor;
                };
                NavCpt.prototype.actOnHover = function (title) {
                    title._currentColor = title.color;
                    this.titleHover.emit(title);
                };
                NavCpt.prototype.actOnLeave = function (title) {
                    title._currentColor = 'black';
                    this.titleLeave.emit(title);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], NavCpt.prototype, "titleHover", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], NavCpt.prototype, "titleLeave", void 0);
                NavCpt = __decorate([
                    core_1.Component({
                        selector: 'fl-nav',
                        styleUrls: [cptUrl + '.less.css'],
                        template: "\n    <div class=\"host\">\n      <div class=\"name\">Qiaonan Duan</div>\n      <div class=\"titles\" *ngIf=\"titles\">\n        <a *ngFor=\"#title of titles\" class=\"title\" [style.background-color]=\"getCurrentColor(title)\" (mouseover)=\"actOnHover(title)\" (mouseleave)=\"actOnLeave(title)\">\n          {{title.text}}\n        </a>\n      </div>\n    </div>\n  ",
                        inputs: ['titles']
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavCpt);
                return NavCpt;
            })();
            exports_1("NavCpt", NavCpt);
        }
    }
});
//# sourceMappingURL=nav.cpt.js.map