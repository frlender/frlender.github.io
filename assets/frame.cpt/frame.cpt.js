System.register(['angular2/core', '../nav.cpt/nav.cpt', '../canvas.cpt/canvas.cpt', '../footer.cpt/footer.cpt', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, nav_cpt_1, canvas_cpt_1, footer_cpt_1, router_1;
    var cptUrl, FrameCpt;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nav_cpt_1_1) {
                nav_cpt_1 = nav_cpt_1_1;
            },
            function (canvas_cpt_1_1) {
                canvas_cpt_1 = canvas_cpt_1_1;
            },
            function (footer_cpt_1_1) {
                footer_cpt_1 = footer_cpt_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            cptUrl = 'assets/frame.cpt/frame.cpt';
            FrameCpt = (function () {
                function FrameCpt() {
                    this.titles = [
                        { text: 'default', color: 'black' },
                        { text: 'I', color: "rgb(201,97,100)" },
                        { text: 'Love', color: "rgb(39,162,184)" },
                        { text: 'You', color: "rgb(93,150,108)" }
                    ];
                    this.currentTitle = this.titles[0];
                }
                FrameCpt.prototype.setCurrentTitle = function (title) {
                    this.currentTitle = title;
                };
                FrameCpt.prototype.getCanvasColor = function (text) {
                    return this.titles.filter(function (title) { return title.text == text; })[0];
                };
                FrameCpt = __decorate([
                    core_1.Component({
                        selector: 'fl-frame',
                        styleUrls: [cptUrl + '.less.css'],
                        templateUrl: cptUrl + '.html',
                        directives: [nav_cpt_1.NavCpt, canvas_cpt_1.CanvasCpt, footer_cpt_1.FooterCpt]
                    }),
                    router_1.RouteConfig([
                        {},
                    ]), 
                    __metadata('design:paramtypes', [])
                ], FrameCpt);
                return FrameCpt;
            })();
            exports_1("FrameCpt", FrameCpt);
        }
    }
});
//# sourceMappingURL=frame.cpt.js.map