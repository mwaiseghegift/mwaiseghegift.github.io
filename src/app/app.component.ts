import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PricePlansComponent } from './price-plans/price-plans.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { ServicesComponent } from './services/services.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { MapFooterComponent } from './map-footer/map-footer.component';
import { EducationComponent } from './education/education.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    SidebarComponent,
    ContactFormComponent,
    PortfolioComponent,
    WorkHistoryComponent,
    ServicesComponent,
    RecommendationsComponent,
    EducationComponent,
    HeroComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mwaiseghe-portfolio';
}
