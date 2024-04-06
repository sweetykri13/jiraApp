import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IProject } from '../../Interface/IProject';
import { ProjectService } from '../../Services/project.service';
import { CreateProjectModelComponent } from '../dailoge/create-project-model/create-project-model.component';
import { DeleteModelComponent } from '../dailoge/delete-model/delete-model.component';
import { EditModelComponent } from '../dailoge/edit-model/edit-model.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  project: IProject[] = [];
  dataSource = new MatTableDataSource<IProject>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private projectService: ProjectService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.getProject();

  }
  getProject() {
    this.projectService.getAllProject().subscribe(
      (data: IProject[]) => {
        this.project = data;
        this.dataSource.data = this.project;
        this.dataSource.paginator = this.paginator;
        //if (this.paginator) {
        //  this.paginator.length = data.length;
        //}
        console.log("data and paginator", this.dataSource.data, this.dataSource.paginator)
      }
    )
  }
  openDeleteDailoge(project: any): void {
    const dialogRef = this.dialog.open(DeleteModelComponent, {
      data: project,
      width: '580px',
      height: '230px'
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.getProject();
      }
    });
  }
  openUpdateDailoge(project: any): void {
    const dialogRef = this.dialog.open(EditModelComponent, {
      data: project,
      width: '580px',
      height: '380px'
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
}
