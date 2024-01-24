import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registerForm = new FormGroup({
    Username: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required, Validators.email]),
    Email: new FormControl('', [Validators.required]),
    Moblie: new FormControl('', [Validators.required]),
    Gender: new FormControl('', [Validators.required]),
  });
  register() {
    console.log(this.registerForm.value)
  }
}
