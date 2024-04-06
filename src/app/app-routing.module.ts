import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './Pages/board/board.component';
import { HomeComponent } from './Pages/home/home.component';
import { IssuePageComponent } from './Pages/issue-page/issue-page.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProjectDetailsComponent } from './Pages/project-details/project-details.component';
import { ProjectComponent } from './Pages/project/project.component';
import { SprintComponent } from './Pages/sprint/sprint.component';
import { TeamComponent } from './Pages/team/team.component';
import { UserRegisterComponent } from './Pages/user-register/user-register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projectDetails', component: ProjectDetailsComponent },
  { path: 'board', component: BoardComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'issue', component: IssuePageComponent },
  { path: 'userRegister', component: UserRegisterComponent },
  { path: 'yourTeam', component: TeamComponent },
  { path: 'sprint', component: SprintComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
