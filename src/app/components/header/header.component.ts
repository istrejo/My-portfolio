import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnchorPipe } from 'src/app/shared/pipes/anchor.pipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule, AnchorPipe],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navigationItems = ['home', 'about', 'portfolio', 'skills', 'contact'];
  ngOnInit(): void {}
}
