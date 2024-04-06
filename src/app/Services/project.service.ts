import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { IProject } from '../Interface/IProject';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  project: IProject[] = [];

  getAllProject(): Observable<IProject[]> {
    return this.http.get<IProject[]>('https://localhost:7165/api/Project/GetAllProjects')
      .pipe(
        catchError(error => {
          console.error('Error fetching projects:', error);
          throw error;
        })
      );
  }

  deleteProject(projectId:number): Observable<IProject[]> {
    let temp = this.http.delete<IProject[]>(`https://localhost:7165/api/Project/DeleteByProjectId?projectId=${projectId}`);
    return temp;
  }

  //updateProject(projectId: number, projectName: string, shortName: string): Observable<any> {
  //  const body = { projectId, projectName, shortName };
  //  return this.http.put<any>('https://localhost:7165/api/Project/UpdateProject', body)
  //    .pipe(
  //      catchError(error => {
  //        console.error('Error updating project:', error);
  //        throw error;
  //      })
  //    );
  //}

  updateProject(projectId: number, projectName: string, shortName: string) {
    const url = `https://localhost:7165/api/Project/UpdateProject?projectId=${projectId}&projectName=${encodeURIComponent(projectName)}&shortName=${encodeURIComponent(shortName)}`;
    return this.http.put(url, null); // Assuming you don't need to send a body in the PUT request
  }

}
