import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

type RoleType = 'student' | 'teacher' | 'admin';

interface Role {
  id: RoleType;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class SignInComponent implements OnInit {
  private fb = inject(FormBuilder);

  isAuthenticated = false;
  selectedRole: RoleType | null = null;

  roles: Role[] = [
    { id: 'student', title: 'Student', description: 'Access courses', icon: '🎓' },
    { id: 'teacher', title: 'Teacher', description: 'Create/manage courses', icon: '👨‍🏫' },
    { id: 'admin', title: 'Admin', description: 'Manage platform', icon: '⚙️' },
  ];

  // Booleans to control visibility
  showRoleSelection = true;
  showSignInForm = false;
  showAdminCode = false;

  // Forms
  signInForm: FormGroup = this.fb.group({
    email: [''],
    password: [''],
    adminCode: [''],
  });

  constructor() {}

  ngOnInit(): void {
    this.updateVisibility();
  }

  selectRole(roleId: RoleType) {
    this.selectedRole = roleId;
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
    this.showAdminCode = this.selectedRole === 'admin';
  }

  signIn() {
    console.log('Sign in with:', this.signInForm.value, 'Role:', this.selectedRole);
  }

  get selectedRoleObj(): Role | undefined {
    return this.roles.find(r => r.id === this.selectedRole);
  }

  get EmailCtrl(): FormControl { return this.signInForm.get('email') as FormControl; }
  get PasswordCtrl(): FormControl { return this.signInForm.get('password') as FormControl; }
  get AdminCodeCtrl(): FormControl { return this.signInForm.get('adminCode') as FormControl; }
}
