import { Component } from '@angular/core';
import { AuthService } from '../../../../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    userName: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.user).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(['/home']);
      },
      err => {
        alert('Wrong username or password');
        console.log(err);
      }
    );
  }
}



