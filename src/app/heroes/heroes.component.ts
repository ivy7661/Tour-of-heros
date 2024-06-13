import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
// import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,FormsModule,HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {
  constructor(private heroService:HeroService,private messageService:MessageService){}

  ngOnInit():void {
    this.getHeroes();
  }
  // hero:Hero= {
  //   id:1,
  //   name:'WindStorm'
  // };
  selectedHero: Hero = { id: 0, name: '' };
  // heroes=HEROES;
  heroes:Hero[]=[]


  onSelect(hero:Hero):void {
    this.selectedHero=hero;
    this.messageService.add(`HeroesComponent:Selected hero id=${hero.id}`)
  }
  getHeroes():void {
    this.heroService.getHeroes().subscribe(heroes =>this.heroes=heroes)
  }
}