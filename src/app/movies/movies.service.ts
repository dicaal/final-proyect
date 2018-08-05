import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import {Jsonp, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class MoviesService {

 apikey: string = 'api_key=40debfced8500981c913ebed5ad8ed68';
 base_url: string = 'https://api.themoviedb.org/3/search/movie?';
 query: string = '&query='; 
 movie_id: string = "'";
 popular_data: string ="popular?"
 
  constructor(private http: HttpClient) {}
    
  movieSearch: any;
  currentSearch: any;
  currentGender: any;
  // getMovieId: any;
  generName: any;
    
    getMovieData (title) {
     // console.log("url_request", (this.base_url + this.apikey + this.query + this.movieSearch));
     let urlRequest = this.base_url + this.apikey + this.query + title;
     return this.http.get(urlRequest)
     .subscribe(data =>{
      this.currentSearch = data.results
      console.log("currentSearch", this.currentSearch)
     })
    // return this.http.get(`https://api.themoviedb.org/3/movie/551?api_key=40debfced8500981c913ebed5ad8ed68`);
  }
  

getMovieId(id) {
    let urlRequest = this.base_url + this.apikey + this.query + id;
    return this.http.get(urlRequest)
    .subscribe(data => {
     this.currentSearch = data.results
     console.log("currentSearch", this.currentSearch)
    })


 }
 
 
 
  getMainPage() {
  let urlRequest = this.base_url + this.popular_data + this.apikey + this.query ;
  
     return this.http.get(urlRequest)     
     .subscribe(data => {
       this.currentSearch = data.results
       console.log("currentSearch", this.currentSearch)
     })

  }
 
 
 

}
