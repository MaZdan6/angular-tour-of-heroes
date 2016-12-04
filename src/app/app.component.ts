import { Component } from '@angular/core';

//Dekorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',// uri to szablonu html
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes= HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void{
  this.selectedHero = hero;
  }
}

// deklaracja klasy
export class Hero{
  id: number;
  name: string;
}

//lista obiektów typu Hero
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice'},
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
