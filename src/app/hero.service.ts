import { Injectable } from '@angular/core';
import { Hero } from './hero';
// import { HEROS } from './mock-hero';
// import { HEROES } from './mock-heroes';
// import { HEROS } from '../mock-hero';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // getHeroes(): Hero[] {
  //   return HEROS;
  // }
}
