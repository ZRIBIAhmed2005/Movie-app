import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { MovieService } from '../../services/movie-service';


@Component({
  imports: [FontAwesomeModule],
  selector: 'app-shearch-bar',
  styleUrl: './shearch-bar.css',
  templateUrl: './shearch-bar.html',
})
export class ShearchBar {
  faMagnifyingGlass = faMagnifyingGlass;

  movieService=inject(MovieService);

  getMovieByTitle(title: string) {
    this.movieService.getMovieList().subscribe(Response => {
      this.movieService.movieList.set(
       Response.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))
      );
    });
  }

}
