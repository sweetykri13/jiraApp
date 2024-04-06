import { Component } from '@angular/core';
import { IProject } from '../../../Interface/IProject';
import { ITicket } from '../../../Interface/ITicket';
import { IUser } from '../../../Interface/IUser';
import { ProjectService } from '../../../Services/project.service';
import { TicketService } from '../../../Services/ticket.service';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-create-model',
  templateUrl: './create-model.component.html',
  styleUrls: ['./create-model.component.css']
})
export class CreateModelComponent {
  projectList: IProject[] = [];
  userList: IUser[] = [];
  ticket: ITicket[] = [];
  ticketObj: any = {
    "ticketId": 0,
    "ticketGuid": "",
    "summary": "",
    "storyPoint": null,
    "status": "",
    "assignedTo": "",
    "issueType": null,
    "createdDate": "2024-03-14T10:21:22.078Z",
    "description": "",
    "createdBy": "",
    "parentId": 0,
    "projectId":0
  };
  projectName: string = '';
  issueType: string = '';
  status: string = '';
  createdBy: string = '';
  assignedTo: string = '';
  summary: string = '';
  description: string = '';
  projectId: number | undefined;
  

  IssueType: string[] = ['Ticket', 'Defect', 'Work'];
  statuss: string[] = ['To Do', 'In Progress', 'Done'];

  constructor(private projectService: ProjectService, private ticketService: TicketService, private userService: UserService) { }

  ngOnInit() {
    this.getAllProject();
    this.getUserList();
  }

  getAllProject() {
    this.projectService.getAllProject().subscribe({
      next: (data: IProject[]) => {
        this.projectList = data;
      }
    });
  }

  getUserList() {
    this.userService.getUserDetails().subscribe({
      next: (data: IUser[]) => {
        this.userList = data;
      }
    });
  }

  createTicket(summary: string, storyPoint: string, status: string, assignedTo: string, issueType: string, description: string, createdBy: string, projectId: number) {
    this.ticketService.createTicket(summary, storyPoint, status, assignedTo, issueType, description, createdBy, projectId).subscribe({
      next: (data: any) => {
        console.log('Ticket created successfully:', data);
      },
      error: (error: any) => {
        console.error('Error creating ticket:', error);
      }
    });
  }
}
