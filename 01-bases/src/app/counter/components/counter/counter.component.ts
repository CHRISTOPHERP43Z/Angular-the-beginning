import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
        <h2> Counter: {{counter}} </h2>
        <button (click)="increaseBy(1)" >+1</button>
        <button (click)="ResetCounter()" >Reset</button>
        <button (click)="increaseBy(-1)" >-1</button>

    ` 
})

export class CounterComponent{
    public title: string = 'Hola caps';
   public counter: number = 2;

   increaseBy( value: number ):void {
    this.counter += value;
   };

   ResetCounter(): void {
    this.counter = 2;
   };
}