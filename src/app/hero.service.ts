import {Injectable} from '@angular/core';
import{Hero} from './hero';
import{HEROES} from './mock-heroes';

/*TypeScript sees the @Injectable() decorator and emits metadata about our service, 
metadata that Angular may need to inject other dependencies into this service.*/
@Injectable()
export class HeroService{   

//Klasa zwraca listę HEROES asynchronicznie przy pomocy Promise'ów

    getHeroes(): Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }
}