import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { education } from '../../data/data';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education = education;
}
