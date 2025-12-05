import { Component } from '@angular/core';

import { NavbarComponent } from '../../navbar/navbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register-main.html',
  styleUrls: ['./register-main.scss'],
  imports: [RouterModule],
})
export class RegistermainComponent {}
