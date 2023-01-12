import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  movies: any;

  constructor(private api:ApiService,private route:ActivatedRoute,private http:HttpClient) {

    this.movies=JSON.parse(localStorage.getItem('reviews')||'')
   }

  ngOnInit(): void {

  }

}
