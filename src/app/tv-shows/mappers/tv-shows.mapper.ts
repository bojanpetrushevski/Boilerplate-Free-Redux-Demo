import { TvShowViewModel } from '../models/tv-shows.view-model';
import { TvShowResponse } from '../responses/tv-shows.response';

// tslint:disable-next-line: no-namespace
export namespace TvShowsMapper {
    export function mapToTvShowViewModel(response: TvShowResponse): TvShowViewModel {
        console.log(response);
        return {
            id: response.id.toString(),
            name: response.name,
            popularity: response.popularity,
            averageVote: response.vote_average,
            originCountry: response.origin_country,
            description: response.overview
        };
    }
}
