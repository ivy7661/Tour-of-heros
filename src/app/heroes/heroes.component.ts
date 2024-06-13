import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,FormsModule,HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  // hero:Hero= {
  //   id:1,
  //   name:'WindStorm'
  // };
  selectedHero?:Hero;
  heroes=HEROES;


  onSelect(hero:Hero):void {
    this.selectedHero=hero;
  }
}