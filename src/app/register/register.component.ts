import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { ApiService } from '../movies/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
email="";
password="";
username="";
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router,private confirmService:NgConfirmService) { }

//registration model
registrationForm=this.fb.group({
  email:['',[Validators.required,Validators.email]],
  username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})


  ngOnInit(): void {
  }

  register(){




    var email=this.registrationForm.value.email
    var username =this.registrationForm.value.username;
    var password = this.registrationForm.value.password;


    
    if(this.registrationForm.valid){

this.confirmService.showConfirm("Registered Successfully " ,
()=>{
  this.api.register(email,username,password)
  .subscribe((result:any)=>{
    // alert(result.message);
    this.router.navigateByUrl('/movies')
  },
  result=>{
  // alert(result.error.message)
  })




},

()=>{
  // 
}

)

  
}
  }
}