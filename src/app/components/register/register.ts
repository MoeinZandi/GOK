import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { AppUser } from '../../models/app-user.model';
import { LoggedInUser } from '../../models/logged-in.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { Country, State, City, ICountry, IState, ICity } from 'country-state-city';
import { NgxCaptchaModule } from 'ngx-captcha';

interface Role {
  id: 'student' | 'teacher' | 'admin';
  title: string;
  icon: string;
  description: string;
  benefits: string[];
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterModule, FormsModule, ReactiveFormsModule,
    MatInputModule, MatFormFieldModule, MatStepperModule,
    MatButtonModule, MatSelectModule, CommonModule, NgxCaptchaModule
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class RegisterComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private accountService = inject(AccountService);

  isLinear = true;

  // Role Selection
  selectedRole: 'student' | 'teacher' | 'admin' | null = null;
  roles: Role[] = [
    { id: 'student', title: 'Student', icon: '🎓', description: 'Learn from expert-led courses', benefits: ['Access all courses','Track progress','Earn certificates'] },
    { id: 'teacher', title: 'Teacher', icon: '👨‍🏫', description: 'Share knowledge with learners', benefits: ['Create courses','Manage students','Earn revenue'] },
    { id: 'admin', title: 'Admin', icon: '⚙️', description: 'Manage the platform', benefits: ['Full access','User management','Analytics dashboard'] },
  ];

  // Stepper Forms
  FirstFg = this.fb.group({
    userNameCtrl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
    emailCtrl: ['', [Validators.required, Validators.email]],
    passwordCtrl: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
    confirmPasswordCtrl: ['', Validators.required],
  });

  SecondFg = this.fb.group({
    ageCtrl: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
    phoneNumberCtrl: ['', Validators.required],
    genderCtrl: ['', Validators.required],
    countryCtrl: ['', Validators.required],
    stateCtrl: ['', Validators.required],
    cityCtrl: ['', Validators.required],
    avatarCtrl: [''],
    expertiseCtrl: [''],
    adminCodeCtrl: [''],
  });

  /** Country/State/City */
  countries: ICountry[] = Country.getAllCountries();
  states: IState[] = [];
  cities: ICity[] = [];
  selectedCountryCode = '';
  selectedStateCode = '';
  loadingCities = false;

  /** Gender options */
  options: string[] = ['Male', 'Female', 'Others', 'Rather not say'];

  userResponse?: LoggedInUser | null;
  error?: string;

  ngOnInit() {}

  // Country/State change handlers
  onCountryChange(event: any): void {
    const code = event.value;
    if (!code) return;
    this.selectedCountryCode = code;
    this.states = State.getStatesOfCountry(code);
    this.cities = [];
  }

  onStateChange(event: any): void {
    const code = event.value;
    if (!code || !this.selectedCountryCode) return;
    this.selectedStateCode = code;
    this.loadingCities = true;
    setTimeout(() => {
      this.cities = City.getCitiesOfState(this.selectedCountryCode, code);
      this.loadingCities = false;
    }, 400);
  }

  // Role selection
  chooseRole(role: 'student' | 'teacher' | 'admin') {
    this.selectedRole = role;
  }
  resetRole() {
    this.selectedRole = null;
  }

  // Register
  register(): void {
    if (this.FirstFg.invalid || this.SecondFg.invalid) {
      this.error = 'Please complete all required fields.';
      return;
    }

    const userInput: AppUser = {
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
    };

    this.accountService.register(userInput).subscribe({
      next: (res) => {
        this.userResponse = res;
        this.error = undefined;
        this.router.navigate(['/classes']);
      },
      error: (err) => {
        this.error = err?.error || 'Registration failed. Please try again.';
      },
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
  get AdminCodeCtrl(): FormControl { return this.SecondFg.get('adminCodeCtrl') as FormControl; }
}
