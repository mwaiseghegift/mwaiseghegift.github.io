import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { services } from '../../data/data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = services;
}
