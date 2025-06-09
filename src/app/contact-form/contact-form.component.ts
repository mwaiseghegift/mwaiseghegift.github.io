import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { contactInfo } from '../../data/data';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contact = contactInfo;
  writeToClipboard(content: string): void {
    navigator.clipboard.writeText(content).then(() => {
      console.log('Content copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }
}
