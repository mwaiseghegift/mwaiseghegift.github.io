import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { profile } from '../../data/data';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  profile = profile;
}
