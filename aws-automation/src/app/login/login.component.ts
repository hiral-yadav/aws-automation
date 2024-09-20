import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  authService = inject(AuthService);
  loginFormGroup = new FormGroup(
    {
      userName: new FormControl(''),
      password: new FormControl('')
    }
  )

  ngOnInit(): void {
    
  }

  onSubmit() {
  }


}
