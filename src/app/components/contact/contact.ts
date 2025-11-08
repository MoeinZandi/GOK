import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent {
  isAuthenticated = false;
  user: any = undefined;

  // Dummy translations
  t = (key: string) => {
    const translations: any = {
      contact: 'Contact',
      contactTitle: 'Get in Touch',
      contactDescription: 'We would love to hear from you. Fill out the form below.',
      contactFormTitle: 'Contact Form',
      fullName: 'Full Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      sendMessage: 'Send Message',
      contactInfo: 'Contact Information',
      emailAddress: 'Email Address',
      phone: 'Phone',
      address: 'Address',
      followUs: 'Follow Us',
    };
    return translations[key] || key;
  };

  handleSubmit(e: Event): void {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
  }
}
