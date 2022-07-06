import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLoginComponent } from './my-login/my-login.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: "interviewer/signUp", component: SignUpComponent },
  { path: "recruiter/signUp", component: SignUpComponent },
  { path: "login", component: MyLoginComponent },
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: "recruiter", loadChildren: () => import("./modules/recruiter.module").then((m) => m.RecruiterModule) },
  { path:"interviewer", loadChildren:()=>import("./modules/interviewer.module").then((m)=>m.InterviewerModule)},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
