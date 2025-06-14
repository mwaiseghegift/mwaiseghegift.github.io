import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { education } from '../../data/data';
import { TitleComponent } from '../shared/title/title.component';

@Component({
  selector: 'app-education',
  imports: [CommonModule, TitleComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education = education;
}
