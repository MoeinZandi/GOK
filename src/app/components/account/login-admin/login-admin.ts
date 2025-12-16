import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  imports: [],
  templateUrl: './login-admin.html',
  styleUrl: './login-admin.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginAdmin {
  private _fb = inject(FormBuilder);
  public router = inject(Router);


    signInForm = this._fb.group({
    email: [''],
    password: [''],
    adminCode: ['']
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
  get AdminCodeCtrl() { return this.signInForm.get('adminCode') as FormControl; }
}
