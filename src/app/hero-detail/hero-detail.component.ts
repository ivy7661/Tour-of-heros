import { Component,Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { NgIf, UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, NgIf],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})



export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero = { id: 0, name: '' };

  constructor(){};

  ngOnInit(): void {
      
  };
}