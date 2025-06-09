import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { portfolio } from '../../data/data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  portfolio = portfolio;
}
