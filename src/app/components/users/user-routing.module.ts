import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [

  {path:'users',component: UsersListComponent},
  {path:'add-user',component: UserFormComponent},
  {path:'user/:id',component:UserComponent},
  {path:'login',component:LoginFormComponent},
  {path:'register',component:RegisterUserComponent},
  {path:'reset-password',component:ResetPasswordFormComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
