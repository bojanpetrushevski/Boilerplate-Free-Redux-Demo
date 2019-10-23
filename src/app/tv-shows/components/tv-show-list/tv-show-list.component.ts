import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TvShowViewModel } from '../../models/tv-shows.view-model';
import { TvShowsFacade } from '../../+store/facade/tv-shows.facade';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent implements OnInit {
  public allTvShows: TvShowViewModel[];
  public hoveredTvShow: TvShowViewModel;

  constructor(private facade: TvShowsFacade, private router: Router) { }

  ngOnInit() {
    this.facade.getAllTvShows();
    this.facade.selectAllTvShows()
    .subscribe({
      next: (result: TvShowViewModel[]) => {
        console.log(result);
        this.allTvShows = result;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  public hoverItem(tvShow: TvShowViewModel): void {
    this.hoveredTvShow = tvShow;
  }

  public goToTvShow(tvShow: TvShowViewModel): void {
    this.router.navigate(['tv-shows', tvShow.id]);
  }
}
