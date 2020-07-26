import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    //fetch to get heroes from api,
    //based on endpoint being hit, backend
    //will return JSONo object of array of Hero objects
    //will set array = to HEROES
    return of(HEROES);
  }
}
