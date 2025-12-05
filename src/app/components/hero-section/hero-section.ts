import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Footer } from "../footer/footer";
import { Searchbox } from '../searchbox/searchbox';

interface Feature {
  icon: string;
  title: string;
  description: string;
  badge: string;
  color: string;
}

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.scss'],
  imports: [Searchbox, Footer],
  encapsulation: ViewEncapsulation.None
})
export class HeroSectionComponent {
  hoveredCard: number | null = null;
  stats: any[] = [];
  team: any[] = [];
  values: any[] = [];
  showScroll = false;

  features: Feature[] = [
    {
      icon: '📚',
      title: 'Expert Classes',
      description: 'Learn from industry experts and experienced educators',
      badge: '1000+ Courses',
      color: 'feature-blue'
    },
    {
      icon: '👥',
      title: 'Global Community',
      description: 'Connect with learners from around the world',
      badge: '50K+ Students',
      color: 'feature-green'
    },
    {
      icon: '🌍',
      title: 'Accessible Anywhere',
      description: 'Learn at your own pace, from anywhere in the world',
      badge: '24/7 Access',
      color: 'feature-purple'
    },
    {
      icon: '💡',
      title: 'Practical Skills',
      description: 'Gain real-world skills that advance your career',
      badge: 'Job Ready',
      color: 'feature-orange'
    }
  ];

  setHover(index: number | null): void {
    this.hoveredCard = index;
  }
}
