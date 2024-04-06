import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IProject } from '../../Interface/IProject';
import { ProjectService } from '../../Services/project.service';
import { CreateProjectModelComponent } from '../dailoge/create-project-model/create-project-model.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  project: IProject[] = [];
  constructor(private projectService: ProjectService, private dialoge: MatDialog, private router: Router) { }

  ngOnInit() {
    this.getProject();
  }

  getProject() {
    this.projectService.getAllProject().subscribe(
      (data: IProject[]) => {
        this.project = data;
      }
    )
  }
  openCreateProjectDailoge(): void {
    const dailogref = this.dialoge.open(CreateProjectModelComponent, {
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
