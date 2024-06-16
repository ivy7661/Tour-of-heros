import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';



@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,FormsModule,HeroDetailComponent,RouterModule,HttpClientModule,HttpClientInMemoryWebApiModule,
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {
  constructor(private heroService:HeroService,private messageService:MessageService,private inMemoryDataService:InMemoryDataService){}

  ngOnInit():void {
    this.getHeroes();
  }
  heroes:Hero[]=[]


  
  getHeroes():void {
    this.heroService.getHeroes().subscribe(heroes =>this.heroes=heroes)
  }
}