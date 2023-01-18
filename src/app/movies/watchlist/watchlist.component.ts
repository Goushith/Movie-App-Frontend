import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
watchlist:any
emsg:any
email:any

  constructor(private api : ApiService,private router:Router,private confirmService:NgConfirmService) {
    this.email=localStorage.getItem('currentEmail')
    this.getwatchlist(this.email)

   }

  ngOnInit(): void {

  }

  getwatchlist(email:any){
    const result = this.api.getwatchlist(email)  
    .subscribe(
      (result:any)=>{
      this.watchlist=result.watchlist
      if(this.watchlist.length==0){
        this.emsg='Empty Wishlist'
      }

    },
    (result: any) => {
      alert('NO movies in Watchlist')
      alert(result.error.message)
      this.emsg=result.error.message
    })
    


  }

deletewatchlist(movies:any){
this.confirmService.showConfirm("Are you sure you want to Delete ?" ,
()=>{
  this.api.deletefromwatchlist(movies.email)
  .subscribe(
    (result:any)=>{
      // alert(result.message)
      this.router.navigateByUrl('watchlist')
      this.watchlist=result.watchlist
      window.location.reload()
 
      // this.watchlist=result.watchlist
    },
(result:any)=>{
  // alert(result.error.message)
}
  )

},

()=>{


})



}
}


