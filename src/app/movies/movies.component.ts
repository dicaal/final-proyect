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
  
  
   title: any;
    movie: any;
    image: any;
    id: any;
    movies;
    // searchRes: Array<Object>;
    // popularList: Array<Object>;
    // theatersList: Array<Object>;
    // topRatedList: Array<Object>;
    // searchRes: Array<Object>;
    // searchStr: string;
   
  constructor(private moviesService: MoviesService ) {
    
    
     
    // .subscribe(res => {
    //   this.popularList = res.results;
    // });
    // this.moviesService.getInTheaters().subscribe(res => {
    //   this.theatersList = res.results;
    // });
    // this.moviesService.getTopRatedMovies().subscribe(res => {
    //   this.topRatedList = res.results;
    // });
  }

   
  ngOnInit() {
    this.movies = this.moviesService.currentSearch
  }
  
  getMovie(){
    
    this.moviesService.getMovieData(this.title);
  }
  
  
  getId(){
    
  this.moviesService.getMovieId(this.id);
   }
  
  // getMovieVote(){
    
  // this.moviesService.getMovieVote(this.vote_average);
  // }

  // getMainPage(){
  
  // this.moviesService.getPopularData()

  //   }

}


