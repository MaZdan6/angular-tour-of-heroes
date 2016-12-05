import {Component, Input} from '@angular/core';
import{Hero} from './hero';


@Component({
    selector: 'my-hero-detail',//pozwala wywołać component w szablonie html
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent{
    @Input()
    hero: Hero;
}