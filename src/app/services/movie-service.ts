import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core'; 
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment.development'; 
import { Movie } from '../interfaces/movie';
import { MovieResponse } from '../interfaces/movie-response';
import { map } from 'rxjs/internal/operators/map';
@Injectable({
    providedIn: 'root'
})
export class MovieService {

    private readonly http=inject(HttpClient);
    private readonly url= environment.url_api;
    private readonly key= environment.api_key;
    private readonly movieUrl= environment.url_movie_api;

    public movieList=signal<Movie[]>([]);
    public selectedMovie = signal<Movie | null>(null);
    public wishList = signal<Movie[]>([]);

    

    getMovieList() : Observable<Movie[]> {
        return this.http
        .get<MovieResponse>(`${this.url}?api_key=${this.key}`)
        .pipe(map(response => response.results),
        );
    }

    getMovieById(id: number) {
        return this.http.get<Movie>(`${this.movieUrl}${id}?api_key=${this.key}`).pipe(
            map(response => response)
        )
    }

    toggleWishList(movie: Movie): void {
        this.wishList.update((movies) => {
            const exists = movies.some((item) => item.id === movie.id);
            return exists
                ? movies.filter((item) => item.id !== movie.id)
                : [...movies, movie];
        });
    }

    isInWishList(movieId: number): boolean {
        return this.wishList().some((movie) => movie.id === movieId);
    }
}
