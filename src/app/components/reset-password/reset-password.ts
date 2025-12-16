import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.html',
  styleUrls: ['./reset-password.scss'],
  encapsulation: ViewEncapsulation.Emulated

})
export class ResetPassword {

  token!: string;
  showSuccess = false;

  fb = new FormBuilder();

  form = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirm: ['', [Validators.required]]
  });

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get('token') || '';
  }

  submit() {
    if (this.form.invalid) return;

    if (this.form.value.password !== this.form.value.confirm) {
      alert("Passwords do not match.");
      return;
    }

    // Normally send to backend:
    // this.api.resetPassword(this.token, this.form.value.password)

    this.showSuccess = true;

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2200);
  }
}
