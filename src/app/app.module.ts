import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { BoardComponent } from './Pages/board/board.component';
import { CreateModelComponent } from './Pages/dailoge/create-model/create-model.component';
import { DeleteModelComponent } from './Pages/dailoge/delete-model/delete-model.component';
import { EditModelComponent } from './Pages/dailoge/edit-model/edit-model.component';
import { HomeComponent } from './Pages/home/home.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProjectComponent } from './Pages/project/project.component';
import { UserRegisterComponent } from './Pages/user-register/user-register.component';
import { MatDialogModule } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateProjectModelComponent } from './Pages/dailoge/create-project-model/create-project-model.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatIconModule } from '@angular/material/icon';
import { DatePickerComponent } from './Pages/StylePage/date-picker/date-picker.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProjectDetailsComponent } from './Pages/project-details/project-details.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IssuePageComponent } from './Pages/issue-page/issue-page.component';
import { SideBarComponent } from './Pages/Sidebar/project-details-side-bar/side-bar.component';
import { UserProfileSidebarComponent } from './Pages/Sidebar/user-profile-sidebar/user-profile-sidebar.component';
import { HelpSideBarComponent } from './Pages/Sidebar/help-side-bar/help-side-bar.component';
import { GiveFeedbackComponent } from './Pages/dailoge/give-feedback/give-feedback.component';
import { CreateTeamModelComponent } from './Pages/dailoge/create-team-model/create-team-model.component';
import { InvitePeopleTeamModelComponent } from './Pages/dailoge/invite-people-team-model/invite-people-team-model.component';
import { LearnMoreSideBarComponent } from './Pages/Sidebar/learn-more-side-bar/learn-more-side-bar.component';
import { SettingSideBarComponent } from './Pages/Sidebar/setting-side-bar/setting-side-bar.component';
import { NavSideBarComponent } from './Pages/Sidebar/nav-side-bar/nav-side-bar.component';
import { TeamComponent } from './Pages/team/team.component';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    AppComponent, HomeComponent,
    BoardComponent, ProjectComponent,
    LayoutComponent, DeleteModelComponent,
    EditModelComponent, CreateModelComponent,
    LoginComponent, UserRegisterComponent, CreateProjectModelComponent,
    DatePickerComponent, ProjectDetailsComponent, LayoutComponent, IssuePageComponent,
    SideBarComponent, NavSideBarComponent, SettingSideBarComponent, UserProfileSidebarComponent,
    HelpSideBarComponent, GiveFeedbackComponent, CreateTeamModelComponent, InvitePeopleTeamModelComponent,
    LearnMoreSideBarComponent, TeamComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule,
    MatDialogModule, FormsModule, GridModule,
    BrowserAnimationsModule, MatNativeDateModule,
    MatDatepickerModule, MatFormFieldModule, NgxDropzoneModule,
    MatIconModule, MatPaginatorModule, MatProgressBarModule,
    MatTableModule, MatButtonModule, MatSidenavModule, MatSortModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
