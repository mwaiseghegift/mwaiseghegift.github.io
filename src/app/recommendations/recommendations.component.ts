import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { recommendations } from '../../data/data';
import { TitleComponent } from '../shared/title/title.component';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.css'
})
export class RecommendationsComponent {
  recommendations = recommendations;
}
