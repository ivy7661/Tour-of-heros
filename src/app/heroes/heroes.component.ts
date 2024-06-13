import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HEROS } from '../mock-hero';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  // hero:Hero= {
  //   id:1,
  //   name:'WindStorm'
  // };
  selectedHero?:Hero;
  heros=HEROS;


  onSelect(hero:Hero):void {
    this.selectedHero=hero;
  }
}
