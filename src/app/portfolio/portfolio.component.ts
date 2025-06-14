import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { portfolio } from '../../data/data';
import { TitleComponent } from '../shared/title/title.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  portfolio = portfolio;
}
