import { Component }       from 'angular2/core';
import {NavCpt} from '../nav.cpt/nav.cpt';
import {CanvasCpt} from '../canvas.cpt/canvas.cpt';
import {FooterCpt} from '../footer.cpt/footer.cpt';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';


var cptUrl = 'assets/frame.cpt/frame.cpt';
@Component({
  selector: 'fl-frame',
  styleUrls: [cptUrl+'.less.css'],
  templateUrl: cptUrl+'.html',
  directives:[NavCpt,CanvasCpt,FooterCpt]
})
@RouteConfig([
  {},
])
export class FrameCpt{
  titles = [
    {text:'default',color:'black'},
    {text:'I', color:"rgb(201,97,100)"},
    {text:'Love',color:"rgb(39,162,184)"},
    {text:'You',color:"rgb(93,150,108)"}
  ];
  currentTitle = this.titles[0];
  
  setCurrentTitle(title){
    this.currentTitle = title;
  }
  getCanvasColor(text){
    return this.titles.filter((title)=>title.text==text)[0];
  }
}
