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
  private tvShow: TvShowViewModel;
  constructor(private facade: TvShowsFacade,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        paramMap => {
          this.tvShowId = paramMap.get('id');
          this.facade.getTvShow(this.tvShowId);
        });

    this.facade.selectTvShow()
      .subscribe({
        next: (result: TvShowViewModel) => {
          this.tvShow = result;
        },
        error: error => {
          console.log(error);
        }
      });
  }

  ngOnDestroy(): void {
    this.tvShow = null;
    this.tvShowId = null;
  }
}
