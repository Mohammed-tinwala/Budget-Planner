import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: any;
  registerForm: any;
  activeForm: 'login' | 'register' = 'login'


  constructor(private fb: FormBuilder,
    private router: Router,
    // private snackBar: MatSnackBar
  ) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  toggleForm(form: 'login' | 'register') {
    this.activeForm = form;
  }

  login() {
    if (this.loginForm.valid) {
      console.log('Login info==>', this.loginForm.value);
      // this.router.navigate(['/budget-planner/dashboard']);
    }else{
    // this.snackBar.open('Invalid email or password', 'close', {duration: 3000});
    alert('Invalide email or password');
    }
  }

  register() {
    if (this.registerForm.valid) {
      console.log('register info==>', this.registerForm.value);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      this.router.navigate(['/budget-planner/dashboard']);
    }else{
    // this.snackBar.open('Invalid email or password', 'close', {duration: 3000});
    alert('Invalide email or password');
    }
  }

}
