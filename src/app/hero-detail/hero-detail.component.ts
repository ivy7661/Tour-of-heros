import { Component,Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})



export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(){};

  ngOnInit(): void {
      
  };
}