import { Component, OnInit, inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Project } from './../../core/models/project.model';
import { Data } from '../../core/models/data.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  private dataSvc = inject(DataService);
  languages: any[];
  frameworks: any[];
  tools: any[];
  cards: Project[] = [
    {
      title: 'Golf People',
      image: './assets/proyects/golfpeople.png',
      url: 'https://golf-people.web.app',
      description: 'IONIC Developer',
    },
    {
      title: 'Shopping List',
      image: './assets/proyects/shopping-list.png',
      url: 'https://aplicaiones-angular.firebaseapp.com/',
      description: 'Front-End',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.dataSvc.getSkills().subscribe(({ languages, frameworks, tools }) => {
      console.log(
        '🚀 ~ file: main.component.ts:35 ~ MainComponent ~ this.dataSvc.getSkills ~ frameworks',
        frameworks
      );
      this.languages = languages;
      this.frameworks = frameworks;
      this.tools = tools;
    });
  }
}
