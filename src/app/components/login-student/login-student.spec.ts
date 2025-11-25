import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStudent } from './login-student';

describe('LoginStudent', () => {
  let component: LoginStudent;
  let fixture: ComponentFixture<LoginStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginStudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginStudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
