import { Component,Output,EventEmitter } from 'angular2/core';
var cptUrl = 'assets/nav.cpt/nav.cpt';
@Component({
  selector: 'fl-nav',
  styleUrls: [cptUrl+'.less.css'],
  template: `
    <div class="host">
      <div class="name">Qiaonan Duan</div>
      <div class="titles" *ngIf="titles">
        <a *ngFor="#title of titles" class="title" [style.background-color]="getCurrentColor(title)" (mouseover)="actOnHover(title)" (mouseleave)="actOnLeave(title)">
          {{title.text}}
        </a>
      </div>
    </div>
  `,
  inputs:['titles']
})
export class NavCpt{
  @Output() titleHover = new EventEmitter();
  @Output() titleLeave = new EventEmitter();


  titles;
  getCurrentColor(title){
    return title._currentColor == undefined?'black':title._currentColor;
  }
  actOnHover(title){
    title._currentColor = title.color;
    this.titleHover.emit(title);
  }

  actOnLeave(title){
    title._currentColor = 'black';
    this.titleLeave.emit(title);
  }

}
