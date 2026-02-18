import { Component } from '@angular/core';
import { ContactInfo } from '../../models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  contactInfo: ContactInfo[] = [
    {
      icon: 'bi-people',
      label: 'Batch:',
      value: 'III/I'
    },
    {
      icon: 'bi-github',
      label: 'GitHub:',
      value: 'SakriyaDangol',
      link: 'https://github.com/SakriyaDangol'
    },
    {
      icon: 'bi-envelope',
      label: 'Email:',
      value: 'sakriya003@gmail.com',
      link: 'mailto:sakriya003@gmail.com'
    },
    {
      icon: 'bi-telephone',
      label: 'Phone:',
      value: '+977-9742928509',
      link: 'tel:+9779742928509'
    }
  ];

  skills = [
    { name: 'HTML/CSS', description: 'Foundation' },
    { name: 'JavaScript', description: 'Logic & Interactivity' },
    { name: 'Bootstrap', description: 'Responsive Design' }
  ];
}