import { Movie } from '../models/movie.view-model';
import { MovieResponse } from '../responses/movies.response';

// tslint:disable-next-line: no-namespace
export namespace MoviesMapper {
    export function toMovie(response: MovieResponse): Movie {
        console.log(response);
        return {
            name: response.name,
            popularity: response.popularity,
            averageVote: response.vote_average,
            originCountry: response.origin_country,
            description: response.overview
        };
    }
}
