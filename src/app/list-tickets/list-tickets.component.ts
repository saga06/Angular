import { Component } from '@angular/core';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent {
  public chaine: string;
  public tab: string[];

  constructor() {
    this.chaine = '';
    this.tab = ['Moi moche et méchant', 'Spécialité fruit de mer', 'Mc Grégor VS Mayweather'];
  }

  public addChaine() {
    if(!this.chaine) {
      return;
    }

    this.tab.push(this.chaine);
    this.chaine = '';
  }

  public removeChaine(index: number) {
    if(index < 0 || index >= this.tab.length) {
      return;
    }

    this.tab.splice(index, 1);
  }

  public editChaine(index: number) {
    if(index < 0 || index >= this.tab.length) {
      return;
    }

    console.log('Action de modification du ticket' + index);
  }

}
