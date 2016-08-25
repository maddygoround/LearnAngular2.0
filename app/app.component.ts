import {Component} from '@angular/core';

export class Hero {
   id : number;
   name : string;
}

const HEROS : Hero[] = [
    {id : 1,name:"maddy"},
    {id : 2,name:"maddy1"},
    {id : 3,name:"maddy2"},
    {id : 4,name:"maddy3"},
    {id : 5,name:"maddy4"},
    {id : 6,name:"maddy5"},
    {id : 7,name:"maddy6"},
]

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>{{selectedHero ? selectedHero.name : "" }} Details!</h2>
    <div *ngFor="let hero of heros" (click)="onSelect(hero)">
        <div>{{hero.name}}</div>
    </div>
    `
})

export class AppComponent {
    title = "Heros Tutorial";
    heros = HEROS;
    selectedHero : Hero;
    onSelect(hero :Hero){
        this.selectedHero = hero;
    }
}