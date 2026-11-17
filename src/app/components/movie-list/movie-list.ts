import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  imports: [],
  selector: 'app-movie-list',
  styleUrl: './movie-list.css',
  templateUrl: './movie-list.html',
})
export class MovieList implements OnInit {
  

  router=inject(Router);
  movieService=inject(MovieService);

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe(Response =>
      this.movieService.movieList .set(Response)
    )

  }

  navigateTo(movie:Movie){
    this.router.navigate(['/',movie.id]);
  }

}
