import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  @Input() title: string = '';
  @Input() tag?: string; // Optional tag, e.g., 'edu'
}
