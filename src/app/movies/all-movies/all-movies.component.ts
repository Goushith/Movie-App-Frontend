import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
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
  currentEmail:any
  constructor(private api:ApiService,private confirmService:NgConfirmService) {
    // if (localStorage.getItem('currentEmail')) {
    //   this.currentEmail = JSON.parse(localStorage.getItem('currentEmail') || '')
    // }
    if (localStorage.getItem('currentEmail')) {
      this.currentEmail = localStorage.getItem('currentEmail')
    }


  }

  ngOnInit(): void {
    this.api.getMovies().subscribe(
      (data:any)=>{
        this.allmovies=data.movies
      }
    )
  }


 addtowatchlist(id:any,name:any,cover:any,rating:any,actors:any,directors:any,description:any){

this.confirmService.showConfirm("Are you sure you want to add ?" ,
()=>{
  if(this.currentEmail){
    // var num=1
    const result = this.api.addtowatchlist(this.currentEmail,id,name,cover,rating,actors,directors,description)
    .subscribe((result:any)=>{




      // alert(result.message)
      // alert('A')
      
      
      
    },
    (result: any) => {
      alert(result.error.message)
    }
    )
  }
},
()=>{
// alert('no means no')
}
)



  // alert('A')

 }
}
