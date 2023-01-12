import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { DescriptionComponent } from './description/description.component';
import { ReviewComponent } from './review/review.component';
import{HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { WatchlistComponent } from './watchlist/watchlist.component'
// import { HeaderComponent } from '../header/header.component';
// import { AppModule } from "../app.module";

@NgModule({
    declarations: [
        MoviesComponent,
        AllMoviesComponent,
        DescriptionComponent,
        ReviewComponent,
        HeaderComponent,
        WatchlistComponent,
        // HeaderComponent
    ],
    imports: [
        CommonModule,
        MoviesRoutingModule,
        HttpClientModule,
        // AppModule
    ]
})
export class MoviesModule { }
