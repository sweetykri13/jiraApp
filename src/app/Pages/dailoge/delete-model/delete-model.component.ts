import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProject } from '../../../Interface/IProject';
import { ProjectService } from '../../../Services/project.service';

@Component({
  selector: 'app-delete-model',
  templateUrl: './delete-model.component.html',
  styleUrls: ['./delete-model.component.css'] // Use styleUrls instead of styleUrl
})
export class DeleteModelComponent implements OnInit {
 
  selectedProject: any;
  projects: IProject[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private projectService: ProjectService) {
    this.ProjectDetails =data
  }
  @Input() ProjectDetails: IProject

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
  deleteProjectById(projectId: number) {
    debugger
    this.projectService.deleteProject(projectId).subscribe(
      () => {
        console.log('Project deleted successfully');
      },
      (error: any) => {
        console.log('Error deleting project:', error);
      }
    );
  }
}


