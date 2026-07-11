import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MiddleComponent } from './middle/middle.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MiddleComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name = 'ABHISHEK PATEL';
  role = 'Sr. Software Engineer | Angular Developer';
  summary =
    'Experienced Angular developer with 7+ years designing, developing, and maintaining dynamic web applications. Expert in creating user-centric, responsive interfaces and optimizing application performance.';
  email = 'abhishek.patel0720@gmail.com';
  phone = '+91-9555418403';
  location = 'New Delhi, India';
  github = 'https://github.com/your-github-profile';
  website = 'https://www.linkedin.com/in/abhishek-patel-99643953/';

  skills = [
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
    'SASS',
    'LESS',
    'SCSS',
    'Angular',
    'RxJS',
    'NgRx',
    'Bootstrap 5',
    'Git',
    'GitHub',
    'GitLab',
    'Agile',
    'Scrum',
    'Figma',
    'Node.js',
    'Webpack',
    'ESLint',
    'Vphrase',
  ];

  achievements = [
    'Exceptional Contribution points from ANZ Bank, CHC, Liberty etc. for innovation.',
    'Outstanding Contribution for year 2019-20, 2020-21 for designing.',
    'Exceptional coding award in Standard Life (2023-24, 2024-25).',
  ];

  experiences = [
    {
      title: 'Software Engineer',
      company: 'Tata Consultancy Services',
      period: 'Mar 2022 - Present',
      location: 'New Delhi, India',
      points: [
        'Led development of enterprise-level Angular applications, resulting in a 15% increase in user engagement.',
        'Integrated RESTful APIs and improved data flow, reducing load times by 15%.',
        'Implemented scalable state management with NgRx, reducing application errors by 15%.',
        'Mentored junior developers; conducted code reviews and knowledge-sharing sessions.',
        'Drove agile best practices and collaborated across design, QA, and backend teams.',
      ],
    },
    {
      title: 'Senior Project Engineer',
      company: 'Wipro Technologies',
      period: 'Nov 2018 - Feb 2022',
      location: 'Bengaluru, India',
      points: [
        'Built single-page applications (SPAs) using Angular and TypeScript for modular, maintainable software.',
        'Integrated third-party APIs, enhancing UI/UX and improving customer satisfaction by 20%.',
        'Built reusable components and services, increasing team productivity by 15%.',
        'Collaborated with designers to deliver mobile-first, responsive UIs.',
      ],
    },
    {
      title: 'Python Developer (Intern)',
      company: 'Cost2Action',
      period: 'Jul 2018 - Oct 2018',
      location: 'New Delhi, India',
      points: [
        'Maintained and developed Python-based automation and data processing tools.',
        'Supported the introduction of 5+ new product features through team collaboration.',
      ],
    },
  ];

  education = [
    {
      degree: 'B.Tech, Computer Science and Engineering',
      school: 'Dr. A. P. J. Abdul Kalam Technical University',
      period: 'Jul 2014 - Jun 2018',
      location: 'Ghaziabad, India',
    },
  ];

  training = ['3-month in-depth JAVA training at Wipro Technologies.'];
  passions = [
    'Driven technologist dedicated to leveraging cutting-edge solutions for real-world challenges.',
    'Committed to learning and applying the latest advancements to build impactful, user-focused applications.',
  ];
  hobbies = ['Video Games', 'Playing Chess', 'Reading Novels'];
}
