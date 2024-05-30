import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-last-profile',
  templateUrl: './last-profile.component.html',
  styleUrls: ['./last-profile.component.css']
})
export class LastProfileComponent implements OnInit {

  profileForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      occupation: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      contact: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log("Form Save!!!", this.profileForm.value);
    } else {
      this.openSnackBar('Please fill in all fields correctly!', 'Close');
    }
  }

  openSnackBar(message: string, action: string) {
    alert("Invalid field");
  }


}
