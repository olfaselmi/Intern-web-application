import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserRoutingModule } from './user-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserChildComponent } from './user-child/user-child.component';
import { UserComponent } from './user/user.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { RegisterUserComponent } from './register-user/register-user.component';


@NgModule({
  declarations: [
    UsersListComponent,
    UserFormComponent,
    UserChildComponent,
    UserComponent,
    LoginFormComponent,
    ResetPasswordFormComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    Ng2SearchPipeModule

    ]
})
export class UserModule { }
