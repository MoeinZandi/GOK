import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-student',
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './login-student.html',
  styleUrl: './login-student.scss'
})
export class LoginStudent {
  private _fb = inject(FormBuilder);
  public router = inject(Router)

    signInForm = this._fb.group({
    email: [''],
    password: ['']
  });

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted');
  }
    signIn() {
    console.log('Sign in:', this.signInForm.value);
  }

  get EmailCtrl() { return this.signInForm.get('email') as FormControl; }
  get PasswordCtrl() { return this.signInForm.get('password') as FormControl; }
}
