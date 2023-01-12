import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

allmovies:any=[]
// movieDes:any
  // description: any;
  data="";
  constructor(private api:ApiService,private route:Router,private router:ActivatedRoute,private http:HttpClient) {}

  ngOnInit(): void {
    this.api.getMovies().subscribe(
      (data:any)=>{
        this.allmovies=data.movies
      }
    )


  }



}
