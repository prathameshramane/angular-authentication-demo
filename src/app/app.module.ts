import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';

// Components 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';

// Services
import { AdminAuthGuard, AuthGuard, AuthService, OrderService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem("token"),
        allowedDomains: ["127.0.0.1:8000"],
        disallowedRoutes: [
          /127.0.0.1:8000\/auth\/*/,
        ],
      }
    }),
    FormsModule,
  ],
  providers: [
    AuthService,
    OrderService,
    AuthGuard,
    AdminAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
