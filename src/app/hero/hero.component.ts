import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { profile } from '../../data/data';
import { contactInfo } from '../../data/data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  profile = profile;
  // Use only the main social links (GitHub, LinkedIn, Twitter, Behance if available)
  profileSocials = contactInfo.social.filter(s => ['github', 'linkedin', 'twitter', 'behance'].includes(s.type));
}
