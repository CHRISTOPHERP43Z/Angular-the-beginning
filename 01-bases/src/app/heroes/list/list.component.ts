import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNames: string[] = [ 'Caps','Spiderman','Thor','Hulk','Ironman' ];
  public deleteHero?: string; 


  removeLastHero():void {
    this.deleteHero = this.heroesNames.pop();
  }
}
