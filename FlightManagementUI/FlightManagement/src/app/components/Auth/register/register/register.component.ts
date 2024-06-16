
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, UserRegisterDTO } from '../../../../../services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: UserRegisterDTO = {
    userName: '',
    password: '',
    email: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit() {
    this.authService.register(this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      err => {
        console.log(err);
      }
    );
  }
}

