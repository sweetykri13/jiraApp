import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProject } from '../../Interface/IProject';
import { ProjectService } from '../../Services/project.service';
import { CreateModelComponent } from '../dailoge/create-model/create-model.component';
import { MatDrawer } from '@angular/material/sidenav';
import { LoginComponent } from '../login/login.component';
import { CreateTeamModelComponent } from '../dailoge/create-team-model/create-team-model.component';
import { InvitePeopleTeamModelComponent } from '../dailoge/invite-people-team-model/invite-people-team-model.component';
import { CreateProjectModelComponent } from '../dailoge/create-project-model/create-project-model.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private dialog: MatDialog, private projectService: ProjectService, private renderer: Renderer2) { }

  project: IProject[] = [];
 @ViewChild('searchInput') searchInputRef!: ElementRef;
  @ViewChild(LoginComponent) LoginComponent!: LoginComponent;

  sideBarOpen: boolean = false;
  sideBarSettingOpen: boolean = false;
  sideBarUserOpen: boolean = false;
  sideBarhelpOpen: boolean = false;

  ngOnInit() {
    this.getProject();
  }
  openHelpSideBar(): void {
    this.sideBarhelpOpen = true;
    this.sideBarSettingOpen = false;
    this.sideBarUserOpen = false;
  }
  openSideBar(): void {
    this.sideBarOpen = true;
    this.sideBarSettingOpen = false;
    this.sideBarUserOpen = false;
  }

  openSideSettingBar(): void {
    this.sideBarSettingOpen = true;
    this.sideBarOpen = false;
    this.sideBarUserOpen = false;
    this.sideBarhelpOpen = false;
  }

  openSideUserBar(): void {
    this.sideBarUserOpen = true;
    this.sideBarOpen = false;
    this.sideBarSettingOpen = false;
    this.sideBarhelpOpen = false;
  }

  closeSideBar(): void {
    this.sideBarOpen = false;
    this.sideBarSettingOpen = false;
    this.sideBarUserOpen = false;
    this.sideBarhelpOpen = false;
  }

  getProject() {
    this.projectService.getAllProject().subscribe({
      next: (data: IProject[]) => {
        this.project = data;
      }
    });
  }

  openCreateDailoge() {
    const dialogRef = this.dialog.open(CreateModelComponent, {
      width: '880px',
      height: '600px',
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.getProject();
      }
    });
  }
  openCreateProjectDailoge(): void {
    const dailogref = this.dialog.open(CreateProjectModelComponent, {
      width: '880px',
      height: '600px'
    });
    dailogref.afterClosed().subscribe(result => {
      if (result) {
        this.getProject();
      }
    })
  }
  onFocus() {
    this.searchInputRef.nativeElement.style.borderColor = '#0d6efd';
    this.searchInputRef.nativeElement.style.backgroundColor = 'white';
  }

  onBlur() {
    this.searchInputRef.nativeElement.style.borderColor = '';
    this.searchInputRef.nativeElement.style.backgroundColor = '';
  }

  OpenCreateTeam() {
    const createTeamDail = this.dialog.open(CreateTeamModelComponent, {
      width: '750px',
      height: '500px'
    });
    createTeamDail.afterClosed().subscribe((result: any) => {
      if (result) {

      }
    });
  } 

  OpenInviteTeam() {
    const inviteTeamDail = this.dialog.open(InvitePeopleTeamModelComponent, {
      width: '370px',
      height: '280px'
    });
    inviteTeamDail.afterClosed().subscribe((result: any) => {
      if (result) {

      }
    });
  }
}
