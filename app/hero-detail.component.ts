<<<<<<< HEAD
import {Component} from 'angular2/core';
import {Hero} from './hero';
@Component({
	selector: 'my-hero-detail',
	template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `,
=======
import {RouteParams} from 'angular2/router';
import { HeroService } from './hero.service';
import { Component, OnInit } from 'angular2/core';

import {Hero} from './hero';

@Component({
	selector: 'my-hero-detail',
	template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
		<button (click)="goBack()">Back</button>
  </div>
`,
>>>>>>> master
	inputs: ['hero']
})
export class HeroDetailComponent {
	hero: Hero;
<<<<<<< HEAD
}
=======
	constructor(
		private _heroService: HeroService,
		private _routeParams: RouteParams) {
	}

	goBack() {
  	window.history.back();
	}

	ngOnInit() {
		console.log('bb');
		let id = +this._routeParams.get('id');
		console.log('aa',id);
		this._heroService.getHero(id)
			.then(hero => this.hero = hero);
	}
}
>>>>>>> master
