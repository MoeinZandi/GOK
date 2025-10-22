import { Component } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.html',
  styleUrls: ['./classes.scss']
})
export class ClassesComponent {
  isAuthenticated = false;
  user: any = undefined;
  
  classes = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      instructor: 'Sarah Johnson',
      description: 'Learn the fundamentals of HTML, CSS, and JavaScript to build your first website.',
      duration: '8 weeks',
      students: 1247,
      rating: 4.8,
      level: 'Beginner',
      image: 'web-development-coding.png'
    },
    {
      id: 2,
      title: 'Data Science with Python',
      instructor: 'Dr. Michael Chen',
      description: 'Master data analysis, visualization, and machine learning using Python.',
      duration: '12 weeks',
      students: 892,
      rating: 4.9,
      level: 'Intermediate',
      image: 'data-science-python-charts.jpg'
    },
    {
      id: 3,
      title: 'Digital Marketing Fundamentals',
      instructor: 'Emma Rodriguez',
      description: 'Learn SEO, social media marketing, and content strategy for modern businesses.',
      duration: '6 weeks',
      students: 2156,
      rating: 4.7,
      level: 'Beginner',
      image: 'digital-marketing-social-media.png'
    },
    {
      id: 4,
      title: 'Advanced React Development',
      instructor: 'Alex Thompson',
      description: 'Deep dive into React hooks, context, and advanced patterns for scalable applications.',
      duration: '10 weeks',
      students: 634,
      rating: 4.9,
      level: 'Advanced',
      image: 'react-javascript-development.jpg'
    },
    {
      id: 5,
      title: 'UX/UI Design Principles',
      instructor: 'Lisa Park',
      description: 'Create user-centered designs with modern tools and design thinking methodologies.',
      duration: '8 weeks',
      students: 1089,
      rating: 4.8,
      level: 'Intermediate',
      image: 'ui-ux-wireframes.png'
    },
    {
      id: 6,
      title: 'Cloud Computing with AWS',
      instructor: 'David Kumar',
      description: 'Master cloud infrastructure, deployment, and scaling with Amazon Web Services.',
      duration: '14 weeks',
      students: 567,
      rating: 4.6,
      level: 'Advanced',
      image: 'cloud-computing-aws-servers.jpg'
    }
  ];

  enroll(courseTitle: string): void {
    alert(`You have enrolled in: ${courseTitle}`);
  }
}
