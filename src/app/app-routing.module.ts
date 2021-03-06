import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
}, {
  path: 'user',
  component: UsersComponent,
},
{
  path: 'signup',
  component: SignUpComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
