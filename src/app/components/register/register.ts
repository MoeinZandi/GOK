import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { RouterLink, RouterModule } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { AppUser } from '../../models/app-user.model';
import { LoggedInUser } from '../../models/logged-in.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterModule, RouterLink,
    FormsModule, ReactiveFormsModule,
    MatInputModule, MatFormFieldModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent {
  accountService = inject(AccountService);
  fB = inject(FormBuilder);

  userResponse: LoggedInUser | undefined | null;
  error: string | undefined;

  //#region 
  registerFg = this.fB.group({
    userNameCtrl: ['', [Validators.required]],
    emailCtrl: ['', [Validators.required, Validators.email]], // formControl
    ageCtrl: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
    genderCtrl: ['',[Validators.required]],
    cityCtrl: [''],
    country: [''],
    passwordCtrl: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    confirmPasswordCtrl: ['', [Validators.required]],
    avatarCtrl: [''] 
  });
  get UserNameCtrl(): FormControl {
    return this.registerFg.get('userNameCtrl') as FormControl;
  }

  get EmailCtrl(): FormControl {
    return this.registerFg.get('emailCtrl') as FormControl;
  }

  get PasswordCtrl(): FormControl {
    return this.registerFg.get('passwordCtrl') as FormControl;
  }

  get ConfirmPasswordCtrl(): FormControl {
    return this.registerFg.get('confirmPasswordCtrl') as FormControl;
  }

    get AgeCtrl(): FormControl {
    return this.registerFg.get('ageCtrl') as FormControl;
  }

    get GenderCtrl(): FormControl {
    return this.registerFg.get('genderCtrl') as FormControl;
  }

    get CityCtrl(): FormControl {
    return this.registerFg.get('cityCtrl') as FormControl;
  }

    get CountryCtrl(): FormControl {
    return this.registerFg.get('countryCtrl') as unknown as FormControl;
  }

  get AvatarCtrl(): FormControl {
    return this.registerFg.get('avatarctrl') as unknown as FormControl;
  }
  //#endregion

  register(): void {
    let userInput: AppUser = {
      userName: this.UserNameCtrl.value,
      email: this.EmailCtrl.value,
      age: this.AgeCtrl.value,
      Gender: this.GenderCtrl.value,
      City: this.CityCtrl.value,
      country: this.CountryCtrl.value,
      password: this.PasswordCtrl.value,
      confirmPassword: this.ConfirmPasswordCtrl.value,
      avatar: this.AvatarCtrl.value
    }
    

    let response$: Observable<LoggedInUser | null> = this.accountService.register(userInput);

    response$.subscribe({
      next: (res) => {
        console.log(res);
        this.userResponse = res;
      },
      error: (err) => {
        console.log(err.error);
        this.error = err.error;
      }
    });
  }
}
