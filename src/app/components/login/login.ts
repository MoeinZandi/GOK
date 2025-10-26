import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AccountService } from '../../services/account.service';
import { Login} from '../../models/login.model';
import { LoggedInUser } from '../../models/logged-in.model';
import { MatInputModule } from "@angular/material/input";
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule, ReactiveFormsModule,MatInputModule,
    MatButtonModule, MatSnackBarModule
],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  accountService = inject(AccountService);
  fB = inject(FormBuilder);
  
  private _snackBar = inject(MatSnackBar);
  private _router = inject(Router);


  //#region loginFg
  loginFg = this.fB.group({
    userNameCtrl: ['', [Validators.required]],
    passwordCtrl: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]]
  });

  get UserNameCtrl(): FormControl {
    return this.loginFg.get('userNameCtrl') as FormControl;
  }

  get PasswordCtrl(): FormControl {
    return this.loginFg.get('passwordCtrl') as FormControl;
  }
  //#endregion

  login(): void {
    let userIn: Login = {
      userName: this.UserNameCtrl.value,
      password: this.PasswordCtrl.value
    }

    let loginRes$: Observable<LoggedInUser | null> = this.accountService.login(userIn);

    loginRes$.subscribe({
      next: (res) => {
        this._snackBar.open(
          '✅ You logged in successfully!',
          'Go to Classes',
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: ['succes-snackbar']
          }
        );
        this._router.navigate(['/classes'])
        // snackBarRef.onAction().subscribe(() => {
        // });
        // snackBarRef.afterDismissed().subscribe(info => {
        //   if (!info.dismissedByAction) {
        //     this.router.navigate(['/classes']);
        //   }
        // });
      },
      error: (err) => {
        this._snackBar.open('❌ Invalid username or password!', 'close', {
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          panelClass: ['erro-snackbar']
      }

        )
      }
    })
  }
}
