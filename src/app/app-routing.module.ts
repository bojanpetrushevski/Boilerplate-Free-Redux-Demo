import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/tv-shows', pathMatch: 'full'},
  {path: 'tv-shows', loadChildren: './tv-shows/tv-shows.module#TvShowsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
