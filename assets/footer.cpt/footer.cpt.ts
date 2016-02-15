import { Component } from 'angular2/core';
var cptUrl = 'assets/footer.cpt/footer.cpt';
@Component({
  selector: 'fl-footer',
  styles:[`
      .host{
        background-color:black;
        text-align:center;
        color:white;
      }
  `],
  template: `
    <div class="host">
      <div>Powered by Angular 2</div>
    </div>
  `
})
export class FooterCpt{

}
