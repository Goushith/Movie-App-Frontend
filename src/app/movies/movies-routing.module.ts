import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeaderComponent } from '../header/header.component';
import { LoginComponent } from '../login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RegisterComponent } from '../register/register.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { DescriptionComponent } from './description/description.component';
import { HeaderComponent } from './header/header.component';
// import { MoviesComponent } from './movies.component';
import { ReviewComponent } from './review/review.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'header',component:HeaderComponent},
  { path:'all-movies', component: AllMoviesComponent },
  { path:'', component: LoginComponent },
  {path:'watchlist',component:WatchlistComponent},
  { path:'register', component:RegisterComponent },
  {path:'description/:id',component:DescriptionComponent},
  {path:'description/:id/review/:id',component:ReviewComponent},
  // {path:'all-movies',component:AllMoviesComponent}
  {path:'**',component:PageNotFoundComponent} 
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
