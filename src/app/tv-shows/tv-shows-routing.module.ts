import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvShowComponent } from './components/tv-show/tv-show.component';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';


const routes: Routes = [
    { path: '', component: TvShowListComponent },
    { path: ':id', component: TvShowComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TvShowsRoutingModule { }
