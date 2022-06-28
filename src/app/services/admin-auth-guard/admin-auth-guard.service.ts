import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this.auth.currentUser && this.auth.currentUser.admin) return true;
    this.router.navigate(["no-access"]);
    return false;
  }
}
