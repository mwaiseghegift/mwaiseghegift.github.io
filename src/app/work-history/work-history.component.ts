import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { workHistory } from '../../data/data';
import { TitleComponent } from '../shared/title/title.component';

@Component({
  selector: 'app-work-history',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './work-history.component.html',
  styleUrl: './work-history.component.css'
})
export class WorkHistoryComponent {
  workHistory = workHistory;
}
