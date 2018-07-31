import { Component, OnInit } from '@angular/core';
import {AppUserService} from "../app-user.service";
import { Router } from '@angular/router';
import { MoviesService} from './movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  
   
  constructor(private moviesService: MoviesService ) { }

    title: any;
    movie: any;
    image: any;
  
  ngOnInit() {
  }
  
  getMovie(){
    
    this.moviesService.getMovieData(this.title);
  }
  
  getimage(){
    
  this.moviesService.getMovieImage(this.image);
    
  }
  
  

}
