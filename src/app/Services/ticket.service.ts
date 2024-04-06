import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITicket } from '../Interface/ITicket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  ticket: ITicket[] = [];
  constructor(private http: HttpClient) { }
  ticketObj: any = {
    "ticketId": 0,
    "ticketGuid": "",
    "summary": "",
    "storyPoint": "",
    "status": "",
    "assignedTo": "",
    "issueType": "",
    "createdDate": "2024-03-14T10:21:22.078Z",
    "description": "",
    "createdBy": "",
    "parentId": 0,
    "projectId":0,
  }
  createTicket(summary: string, storyPoint: string, status: string, assignedTo: string, issueType: string, description: string, createdBy: string,projectId:number) {
    const url = `https://localhost:7165/api/Ticket/CreateTask?summary=${summary}&storyPoint=${storyPoint}&status=${status}&assignedTo=${assignedTo}&issueType=${issueType}&description=${description}&createdBy=${createdBy}&projectId=${projectId}`;
    return this.http.post(url,null);
  }

}
