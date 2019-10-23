import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { TvShowViewModel } from '../models/tv-shows.view-model';
import { TvShowsResponse, TvShowResponse } from '../responses/tv-shows.response';
import { TvShowsMapper } from '../mappers/tv-shows.mapper';

@Injectable()
export class TvShowsApiService {

  constructor(private http: HttpClient) { }

  public getAllTvShows(): Observable<TvShowViewModel[]> {
      return this.http.get<TvShowsResponse>
      ('https://api.themoviedb.org/3/tv/popular?api_key=27c57a2fa0a497f5254514cfb15a0827&language=en-US&page=1')
      .pipe(
        map((allTvShows: TvShowsResponse) => {
          return allTvShows.results.map(tvShow => TvShowsMapper.mapToTvShowViewModel(tvShow));
        })
      );
  }

  public getTvShowById(id: string): Observable<TvShowViewModel> {
    return this.http.get<TvShowResponse>
    ('https://api.themoviedb.org/3/tv/' + id + '?api_key=27c57a2fa0a497f5254514cfb15a0827&language=en-US')
    .pipe(
      map((tvShow: TvShowResponse) => {
        return TvShowsMapper.mapToTvShowViewModel(tvShow);
      })
    );
  }
}
