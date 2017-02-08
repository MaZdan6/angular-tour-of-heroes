import {Component, Input} from '@angular/core';
import{Hero} from './hero';

//komponent HeroDetail
@Component({
    selector: 'my-hero-detail',//pozwala wywołać component w szablonie html
    templateUrl: './hero-detail.component.html'//referencje do szablonu HTML komponentu
})
export class HeroDetailComponent{
    @Input()//wprowadzenie nazwy bohatera w formularzu
    hero: Hero;
}