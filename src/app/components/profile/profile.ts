import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
  encapsulation: ViewEncapsulation.Emulated

})
export class ProfileComponent {
  isAuthenticated = true;

  user = {
    name: "Moein Zandi",
    email: "moeinzandi@gmail.com",
    avatar: "/maleavatar.png",
    bio: "Passionate learner exploring web development, data science, and digital marketing. Always eager to expand my knowledge and connect with fellow learners.",
    joinDate: "January 2024",
    location: "Karaj, IR",
  };

  stats = [
    { label: "Courses Enrolled", value: "12" },
    { label: "Courses Completed", value: "8" },
    { label: "Certificates Earned", value: "5" },
    { label: "Learning Hours", value: "156" },
  ];

  enrolledCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      progress: 75,
      instructor: "Alex Thompson",
      image: "/react-javascript-development.jpg",
    },
    {
      id: 2,
      title: "Data Science with Python",
      progress: 45,
      instructor: "Dr. Michael Chen",
      image: "/data-science-python-charts.jpg",
    },
    {
      id: 3,
      title: "Digital Marketing Fundamentals",
      progress: 90,
      instructor: "Emma Rodriguez",
      image: "/digital-marketing-social-media.png",
    },
  ];

  achievements = [
    { id: 1, title: "First Course Completed", icon: "🎓", date: "Feb 2024" },
    { id: 2, title: "5 Courses Milestone", icon: "🏆", date: "Mar 2024" },
    { id: 3, title: "100 Hours Learning", icon: "⏰", date: "Apr 2024" },
    { id: 4, title: "Top Performer", icon: "⭐", date: "May 2024" },
  ];

  skills = [
    "React",
    "JavaScript",
    "Python",
    "Data Analysis",
    "Digital Marketing",
    "SEO",
    "UI/UX Design",
    "Cloud Computing",
  ];
}
