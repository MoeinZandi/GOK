import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {

  // Simulated auth state
  isAuthenticated = false;
  user: any = null;

  // Fake i18n (replace with your real translation service)
  t(key: string): string {
    const dict: Record<string, string> = {
      about: 'About',
      aboutGOK: 'About GOK',
      galaxyOfKnowledge: 'Galaxy Of Knowledge',
      aboutDescription: 'Your gateway to global education.',
      exploreCourses: 'Explore Courses',
      getInTouch: 'Get in Touch',
      ourMission: 'Our Mission',
      missionDescription1: 'Education is the most powerful tool for transformation.',
      missionDescription2: 'We bridge traditional learning with modern skills.',
      activeLearners: 'Active Learners',
      expertCourses: 'Expert Courses',
      completionRate: 'Completion Rate',
      ourStory: 'Our Story',
      values: 'Our Values',
      leadershipTeam: 'Leadership Team',
      readyToStart: 'Ready to Start Learning?',
      joinThousands: 'Join thousands of learners worldwide.',
      getStartedToday: 'Get Started Today',
      browseCourses: 'Browse Courses'
    };

    return dict[key] ?? key;
  }

  // Data models
  stats = [
    { value: '50,000+', label: this.t('activeLearners') },
    { value: '500+', label: this.t('expertCourses') },
    { value: '95%', label: this.t('completionRate') }
  ];

  values = [
    { emoji: '🌍', title: 'Accessibility', desc: 'Education for everyone, everywhere.' },
    { emoji: '⭐', title: 'Excellence', desc: 'High-quality courses and outcomes.' },
    { emoji: '🤝', title: 'Community', desc: 'Learn and grow together.' },
    { emoji: '🚀', title: 'Innovation', desc: 'Always improving learning experience.' }
  ];

  team = [
    { emoji: '👨‍💼', name: 'Alex Chen', role: 'CEO' },
    { emoji: '👩‍🏫', name: 'Sarah Johnson', role: 'Chief Academic Officer' },
    { emoji: '👨‍💻', name: 'Marcus Rodriguez', role: 'CTO' }
  ];
}
