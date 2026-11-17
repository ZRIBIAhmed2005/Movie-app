import { Component, signal } from '@angular/core';

import { HeadBar } from './components/head-bar/head-bar';
import { ShearchBar } from './components/shearch-bar/shearch-bar';
import {RouterOutlet } from '@angular/router';
@Component({
  imports: [ HeadBar , ShearchBar, RouterOutlet], 
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('movie-app');
}
