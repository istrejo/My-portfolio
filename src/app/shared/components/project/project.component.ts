import { Component, Input, OnInit } from '@angular/core';

import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() project: Project = {
    title: '',
    image: '',
    url: '',
    description: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
