import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/table',
    pathMatch: 'full'
  },
//   {
//     path: 'table',
//     canActivate: [AuthGuard],
//     component: TableComponent
//   },
//   {
//       path: 'login',
//       component: LoginComponent
//   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }