import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { AsyncPipe } from '@angular/common';

import {
  debounce,
  debounceTime,distinctUntilChanged,switchMap
} from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [RouterModule,NgFor,AsyncPipe],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.scss'
})
export class HeroSearchComponent implements OnInit{
  heroes$!:Observable<Hero[]>;
  
  private searchTerms = new Subject<string>();

  constructor(private heroService:HeroService) {}

  search(term:string):void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string) => this.heroService.searchHeroes(term)),
    )
  }
}
