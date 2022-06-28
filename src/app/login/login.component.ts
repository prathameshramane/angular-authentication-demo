import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services';

interface UserCredentials {
  email: string,
  password: string
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  login(data: UserCredentials) {
    this.auth.login(data.email, data.password)
      .subscribe({
        next: (result: any) => {
          const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
          this.router.navigate([returnUrl || "/"])
        },
        error: (err) => {
          this.invalidLogin = true;
        }
      })
  }

  disableInvalid() {
    this.invalidLogin = false;
  }
}
