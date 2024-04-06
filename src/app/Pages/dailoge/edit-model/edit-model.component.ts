import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProject } from '../../../Interface/IProject';
import { ProjectService } from '../../../Services/project.service';

@Component({
  selector: 'app-edit-model',
  templateUrl: './edit-model.component.html',
  styleUrl: './edit-model.component.css'
})
export class EditModelComponent {

  project: IProject[] = [];
  selectedProject: any;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private projectService: ProjectService) {
    this.ProjectDetails = data;
  }

  @Input() ProjectDetails: IProject;

  ngOnInit() {
    this.fetchProjectDetails();
  }
  fetchProjectDetails() {
    this.projectService.getAllProject().subscribe(
      (projects: IProject[]) => {
        this.selectedProject = projects.find((project: IProject) => project.projectId === this.data.projectId);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  updateProjectDetails(projectId: number, projectName: string, shortName: string) {
    this.projectService.updateProject(projectId,projectName, shortName)
      .subscribe(
        () => {
          console.log('Project updated successfully');
        },
        (error: any) => {
          console.log('Error updating project:', error);
        }
      );
  }
}
