import { Component, OnInit, OnDestroy } from '@angular/core';
import { TvShowsFacade } from '../../+store/facade/tv-shows.facade';
import { ActivatedRoute } from '@angular/router';
import { TvShowViewModel } from '../../models/tv-shows.view-model';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit, OnDestroy {
  private tvShowId: string;
  public tvShow: TvShowViewModel;
  public isLoading: boolean;

  constructor(private facade: TvShowsFacade,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true;
    this.tvShow = null;
    this.route.paramMap
      .subscribe(
        paramMap => {
          this.tvShowId = paramMap.get('id');
          this.facade.getTvShow(this.tvShowId);
        });

    this.facade.selectTvShow()
      .subscribe({
        next: (result: TvShowViewModel) => {
          this.isLoading = false;
          this.tvShow = result;
        },
        error: error => {
          console.log(error);
          this.isLoading = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.facade.removeSelectedTvShow();
  }
}
