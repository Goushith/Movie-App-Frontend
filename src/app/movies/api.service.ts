import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

//currentuser
currentUser=""

//current account number
currentEmail=""

  constructor(private http:HttpClient) { }


  saveDetails(){
    if(this.userDetails){
    //DATABASE
    localStorage.setItem('DataBase',JSON.stringify(this.userDetails))
    }
    if(this.currentUser){
    //currentuser
    localStorage.setItem('currentUser',JSON.stringify(this.currentUser))
    }
    if(this.currentEmail){
    //curentaccount number
    localStorage.setItem('currentAcno',JSON.stringify(this.currentEmail))
  }
}



userDetails={
  "gcm0006@gmail.com":{email:"gcm0006@gmail.com",username:"Goushith",password:1000},
  "rafnas@gmail.com":{email:"rafnas@gmail.com",username:"Rafnas",password:1001},
  "anujith@gmail.com":{email:"anujith@gmail.com",username:"Anujith",password:1002},

}




  register(email:any,username:any,password:any){
    const data={
      email,
      password,
      username
    }

return this.http.post('http://localhost:3000/register',data)

}



login(email:any,password:any){
  const data={
    email,
    password
  }
  return this.http.post('http://localhost:3000/login',data)
}



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


// addtowatchlist(movies:any){

//   const body={

//     id:movies.id,
//     name:movies.name,
//     cover:movies.cover,
//     rating:movies.rating,
//     actors:movies.actors,
//     directors:movies.directors,
//     description:movies.description
//   }

// return this.http.post('http://localhost:3000/addtowatchlist',body)
// }



// getwatchlist(){
//   return this.http.get('http://localhost:3000/getwatchlis')
// }

addtowatchlist(email:any,id:any,name:any,cover:any,rating:any,actors:any,directors:any,description:any){

  const body={
    email,
    id,
    name,
    cover,
    rating,
    actors,
    directors,
    description
  }

return this.http.post('http://localhost:3000/addtowatchlist',body)
}




getwatchlist(email:any){
  const body={
    email
  }
  return this.http.post('http://localhost:3000/getwatchlist',body)
}


// getwatchlist(){
  
//   return this.http.get('http://localhost:3000/getwatchlist')
// }

deletefromwatchlist(email:any){
  return this.http.delete('http://localhost:3000/deletewatchlist/'+email)
}

}



