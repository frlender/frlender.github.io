import { Component } from 'angular2/core';
var cptUrl = 'assets/canvas.cpt/canvas.cpt';
@Component({
  selector: 'fl-canvas',
  styleUrls: [cptUrl+'.less.css'],
  template: `
    <div class="host" [style.background-color]="getBackgroundColor()">
    </div>
  `,
  inputs:['title']
})
export class CanvasCpt{
  title;
  getBackgroundColor(){
    return this.title==undefined?"black":this.title.color;
  }
  // getCurrentColor(title){
  //   return title._currentColor == undefined?'black':title._currentColor;
  // }
  // addHoverColor(title){
  //   title._currentColor = title.color;
  // }
  //
  // removeHoverColor(title){
  //   title._currentColor = 'black';
  // }
}
