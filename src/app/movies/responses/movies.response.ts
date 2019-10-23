export class MovieResponse {
    public name: string;
    public popularity: string;
    // tslint:disable-next-line: variable-name
    public origin_country: string;
    // tslint:disable-next-line: variable-name
    public vote_average: number;
    public overview: string;
}

export class MoviesResponse {
    public results: MovieResponse[];
}
