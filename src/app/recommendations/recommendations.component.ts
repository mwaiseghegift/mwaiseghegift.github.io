import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { recommendations } from '../../data/data';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.css'
})
export class RecommendationsComponent {
  recommendations = recommendations;
}
