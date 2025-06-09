import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { workHistory } from '../../data/data';

@Component({
  selector: 'app-work-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-history.component.html',
  styleUrl: './work-history.component.css'
})
export class WorkHistoryComponent {
  workHistory = workHistory;
}
