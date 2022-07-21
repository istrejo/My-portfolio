import { Component, Input, Output, OnInit } from '@angular/core';
import { Project } from './../../core/models/project.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  cards: Project[] = [
    {
      title: 'Golf People',
      image: './assets/proyects/golfpeople.png',
      url: 'https://golf-people.web.app',
      description: 'Front-End (en dasarrollo)',
    },
    {
      title: 'Shopping List',
      image: './assets/proyects/shopping-list.png',
      url: 'https://aplicaiones-angular.firebaseapp.com/',
      description: 'Front-End',
    },
    {
      title: 'RickAndMortyAPP',
      image: './assets/proyects/rickAndMortyAPP.png',
      url: 'https://aplicaiones-angular.web.app/home',
      description: 'Front-End',
    },
    {
      title: 'WikiSearchAPP',
      image: './assets/proyects/wikisearch.png',
      url: 'https://wikisearchapp.web.app/',
      description: 'Front-End',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
