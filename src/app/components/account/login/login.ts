import { Component, inject, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

type RoleType = 'student' | 'teacher' | 'admin';

interface Role {
  id: RoleType;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule,
    RouterLink]
})
export class LoginComponent implements OnInit {
  private fb = inject(FormBuilder);
  public router = inject(Router)

  isAuthenticated = false;

  // FIX: selectedRole must be Role (not string)
  selectedRole: Role | null = null;

  roles: Role[] = [
    { id: 'student', title: 'Student', description: 'Access courses', icon: '🎓' },
    { id: 'teacher', title: 'Teacher', description: 'Create/manage courses', icon: '👨‍🏫' },
    { id: 'admin', title: 'Admin', description: 'Manage platform', icon: '⚙️' },
  ];

  signInForm = this.fb.group({
    email: [''],
    password: [''],
    adminCode: ['']
  });

  showRoleSelection = true;
  showSignInForm = false;
  showAdminCode = false;

  ngOnInit() { 
    this.updateVisibility();
  }

  // FIX: assign full Role object instead of string
  selectRole(role: RoleType) {
    this.selectedRole = this.roles.find(r => r.id === role) ?? null;
    this.updateVisibility();
  }

  changeRole() {
    this.selectedRole = null;
    this.updateVisibility();
    this.signInForm.reset();
  }

  private updateVisibility() {
    this.showRoleSelection = !this.selectedRole;
    this.showSignInForm = !!this.selectedRole;
    this.showAdminCode = this.selectedRole?.id === 'admin';
  }
}
