import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { AppUserStudent } from '../../models/app-user-student.model';
import { LoggedInUser } from '../../models/logged-in.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AppUserTeacher } from '../../models/app-user-teacher.model';



@Component({
  selector: 'app-teacher-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatStepperModule, MatButtonModule, CommonModule],
  templateUrl: './teacher-register.html',
  styleUrls: ['./teacher-register.scss'],
})
export class TeacherRegisterComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private accountService = inject(AccountService);

  FirstFg: FormGroup = this.fb.group({
    userNameCtrl: ['', [Validators.required, Validators.minLength(3)]],
    emailCtrl: ['', [Validators.required, Validators.email]],
    passwordCtrl: ['', [Validators.required, Validators.minLength(6)]],
    confirmPasswordCtrl: ['', Validators.required],
  });

  SecondFg: FormGroup = this.fb.group({
    ageCtrl: ['', Validators.required],
    phoneNumberCtrl: ['', Validators.required],
    genderCtrl: ['', Validators.required],
    countryCtrl: ['', Validators.required],
    stateCtrl: ['', Validators.required],
    cityCtrl: ['', Validators.required],
    avatarCtrl: [''],
    expertiseCtrl: ['', Validators.required],
  });

  userResponse?: LoggedInUser | null;
  error?: string;

  ngOnInit() {}

  register(): void {
    if (this.FirstFg.invalid || this.SecondFg.invalid) {
      this.error = 'Please complete all required fields.';
      return;
    }

    const userInput: AppUserTeacher = {
      userName: this.UserNameCtrl.value!,
      email: this.EmailCtrl.value!,
      age: this.AgeCtrl.value!,
      phoneNumber: this.PhoneNumberCtrl.value!,
      gender: this.GenderCtrl.value!,
      city: this.CityCtrl.value!,
      country: this.CountryCtrl.value!,
      password: this.PasswordCtrl.value!,
      confirmPassword: this.ConfirmPasswordCtrl.value!,
      avatar: this.AvatarCtrl.value!,
      expertise: this.ExpertiseCtrl.value!
    };

    this.accountService.register(userInput).subscribe({
      next: (res) => { this.userResponse = res; this.router.navigate(['/classes']); },
      error: (err) => { this.error = err?.error || 'Registration failed.'; },
    });
  }

  // Getters
  get UserNameCtrl(): FormControl { return this.FirstFg.get('userNameCtrl') as FormControl; }
  get EmailCtrl(): FormControl { return this.FirstFg.get('emailCtrl') as FormControl; }
  get PasswordCtrl(): FormControl { return this.FirstFg.get('passwordCtrl') as FormControl; }
  get ConfirmPasswordCtrl(): FormControl { return this.FirstFg.get('confirmPasswordCtrl') as FormControl; }
  get AgeCtrl(): FormControl { return this.SecondFg.get('ageCtrl') as FormControl; }
  get PhoneNumberCtrl(): FormControl { return this.SecondFg.get('phoneNumberCtrl') as FormControl; }
  get GenderCtrl(): FormControl { return this.SecondFg.get('genderCtrl') as FormControl; }
  get CountryCtrl(): FormControl { return this.SecondFg.get('countryCtrl') as FormControl; }
  get StateCtrl(): FormControl { return this.SecondFg.get('stateCtrl') as FormControl; }
  get CityCtrl(): FormControl { return this.SecondFg.get('cityCtrl') as FormControl; }
  get AvatarCtrl(): FormControl { return this.SecondFg.get('avatarCtrl') as FormControl; }
  get ExpertiseCtrl(): FormControl { return this.SecondFg.get('expertiseCtrl') as FormControl; }
}
