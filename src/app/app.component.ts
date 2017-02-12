import { Component } from '@angular/core';
import{Hero} from './hero';
import{HeroService} from './hero.service';
import{OnInit} from '@angular/core';

//Dekorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',// uri to szablonu html
  styleUrls: ['./app.component.css'],
  providers:[HeroService]//wstrzykiwanie zależności
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

 // kontruktor tworzy instancję 'heroService' (wstrzykiwanie zależności)
  constructor(private heroService: HeroService){}
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes=> this.heroes= heroes);
  }
  
  onSelect(hero: Hero): void{
  this.selectedHero = hero;
  }

  ngOnInit(): void{
    this.getHeroes();
  }
}



