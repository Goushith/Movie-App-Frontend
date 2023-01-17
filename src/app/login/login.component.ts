import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { ApiService } from '../movies/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email="";
  password="";

  constructor(private fb:FormBuilder,private api:ApiService,private router:Router,private confirmService:NgConfirmService) { }

  loginForm=this.fb.group({
    email:["",[Validators.required,Validators.email]],
    password:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  })


  ngOnInit(): void {
  }



  login(){
    var email=this.loginForm.value.email;
    var password=this.loginForm.value.password;
    // var userDetails=this.ds.userDetails;
if(this.loginForm.valid){

this.confirmService.showConfirm("Do you want to login  ?" ,
()=>{

this.api.login(email,password)



.subscribe((result:any)=>{
  localStorage.setItem('currentEmail',JSON.stringify(result.currentEmail))
  localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
  localStorage.setItem('token',JSON.stringify(result.token))

// alert(result.message);
this.router.navigateByUrl('all-movies')

},
result=>{
// alert(result.error.message);
}
)

},

()=>{

// alert('dfsdfsdhb')

})
}
}
}

// this.confirmService.showConfirm("Are you sure you want to add ?" ,
// ()=>{
// },

// ()=>{