import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { services } from '../../data/data';
import { TitleComponent } from '../shared/title/title.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = services;
}
