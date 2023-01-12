import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getMovies(){
    return this.http.get('http://localhost:3000/all-movies')
  }


  getmoviedetail(id:any){
    const data = {
      id
    }
    return this.http.post('http://localhost:3000/movie-details', data)
  }

  getmoviereview(id:any){
    const data = {
      id,
     
    }
    return this.http.post('http://localhost:3000/review-details', data)
  }
}
