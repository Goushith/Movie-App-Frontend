import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user=""
  constructor(private router:Router) {

    if(localStorage.getItem('currentUser')){
      this.user=JSON.parse(localStorage.getItem('currentUser')||'')
      // console.log(this.user);
    }


   }

  ngOnInit(): void {
  }



  logOut(){
    // alert('gsg')
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentAcno');
    localStorage.removeItem('token')
    this.router.navigateByUrl('')
    }

}
