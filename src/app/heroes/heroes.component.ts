import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
// import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,FormsModule,HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit{
  constructor(private heroService:HeroService){}

  ngOnInit():void {
    this.getHeroes();
  }
  // hero:Hero= {
  //   id:1,
  //   name:'WindStorm'
  // };
  selectedHero?:Hero;
  // heroes=HEROES;
  heroes:Hero[]=[]


  onSelect(hero:Hero):void {
    this.selectedHero=hero;
  }
  getHeroes():void {
    this.heroes=this.heroService.getHeroes();
  }
}