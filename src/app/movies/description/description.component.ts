import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { MoviesComponent } from '../movies.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {


  // movieee:any;
  // movieId:any

// movie:Movie | undefined

  data="";
  type=''
  id:any='';
  url='';
  movies: any;
  movie: any;
  
  // allmovies!: any[];

  constructor(private api:ApiService,private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {


    this.id=this.route.snapshot.params['id'];
    if(this.id==='id'){
      this.url = 'http://localhost:3000/movie-details'

    }
    this.getmoviedetail(this.id);

  }
  


  getmoviedetail(id:any){
    const result = this.api.getmoviedetail(id)
    .subscribe((result:any)=>{
      this.movies=result.movies;
    },
    (result:any)=>{
      alert(result.error.message);

    })

  }

pushreview(){
  localStorage.setItem('reviews',JSON.stringify(this.movies.reviews))
}

}

