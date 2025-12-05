import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { AppUserStudent } from '../../../models/app-user-student.model';
import { LoggedInUser } from '../../../models/logged-in.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-student-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatStepperModule, MatButtonModule],
  templateUrl: './student-register.html',
  styleUrls: ['./student-register.scss'],
})
export class StudentRegisterComponent implements OnInit {
  step = 1;
  fb = inject(FormBuilder);
  router = inject(Router);
  accountService = inject(AccountService);
  
  userResponse: LoggedInUser | null | undefined;
  error: string | undefined;
  subscribedRegisterUser: Subscription | undefined;

  minDate = new Date();
  maxDate = new Date();

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 99, 0, 1);
    this.maxDate = new Date(currentYear - 18, 0, 1);
  }

  ngOnDestroy(): void {
    this.subscribedRegisterUser?.unsubscribe();
  }

  //#region 
  FirstFg: FormGroup = this.fb.group({
    userNameCtrl: ['', [Validators.required, Validators.minLength(3)]],
    emailCtrl: ['', [Validators.required, Validators.email]],
    passwordCtrl: ['', [Validators.required, Validators.minLength(6)]],
    confirmPasswordCtrl: ['', Validators.required],
  });

  SecondFg: FormGroup = this.fb.group({
    dateOfBirthCtrl: ['', Validators.required],
    phoneNumberCtrl: ['', Validators.required],
    genderCtrl: ['', Validators.required],
    countryCtrl: ['', Validators.required],
    stateCtrl: ['', Validators.required],
    cityCtrl: ['', Validators.required],
  });

    // Getters
    get UserNameCtrl(): FormControl { return this.FirstFg.get('userNameCtrl') as FormControl; }
    get EmailCtrl(): FormControl { return this.FirstFg.get('emailCtrl') as FormControl; }
    get PasswordCtrl(): FormControl { return this.FirstFg.get('passwordCtrl') as FormControl; }
    get ConfirmPasswordCtrl(): FormControl { return this.FirstFg.get('confirmPasswordCtrl') as FormControl; }
    get DateOfBirthCtrl(): FormControl { return this.SecondFg.get('dateOfBirthCtrl') as FormControl; }
    get PhoneNumberCtrl(): FormControl { return this.SecondFg.get('phoneNumberCtrl') as FormControl; }
    get GenderCtrl(): FormControl { return this.SecondFg.get('genderCtrl') as FormControl; }
    get CountryCtrl(): FormControl { return this.SecondFg.get('countryCtrl') as FormControl; }
    get StateCtrl(): FormControl { return this.SecondFg.get('stateCtrl') as FormControl; }
    get CityCtrl(): FormControl { return this.SecondFg.get('cityCtrl') as FormControl; }

    //#endregion

  getDateOnly(dob: string | null): string | undefined {
    if (!dob) return undefined;

    let theDob: Date = new Date(dob);
    return new Date(theDob.setMinutes(theDob.getMinutes() - theDob.getTimezoneOffset())).toISOString().slice(0, 10);
    // gets the first 10 chars from this date YYYY-MM-DDTHH:mm:ss.sssZ the output is YYYY-MM-DD
  }
  

  register(): void {
    let userInput: AppUserStudent = {
      userName: this.UserNameCtrl.value!,
      email: this.EmailCtrl.value!,
      dateOfBirth: this.getDateOnly(this.DateOfBirthCtrl.value),
      phoneNumber: this.PhoneNumberCtrl.value!,
      gender: this.GenderCtrl.value!,
      city: this.CityCtrl.value!,
      country: this.CountryCtrl.value!,
      password: this.PasswordCtrl.value!,
      confirmPassword: this.ConfirmPasswordCtrl.value!,
    }
    let response$: Observable<LoggedInUser | null> = this.accountService.registerStudent(userInput);

    this.subscribedRegisterUser = response$.subscribe({
      next: (res) => {
        console.log(res);
        this.userResponse = res;
      },
      error: (err) => {
        console.log(err.error);
        this.error = err.error;
      }
    });
  }; 

   get passwordsDoNotMatch() {
    return (
      this.FirstFg.get('password')?.value &&
      this.FirstFg.get('confirmPassword')?.value &&
      this.FirstFg.get('password')?.value !== this.FirstFg.get('confirmPassword')?.value
    );
  }
  
  goNext() {
    this.step++;
  }

  goPrev() {
    this.step--;
  }

}
