import { CommonModule } from '@angular/common';
import { Component, NgModule, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-project-model',
  templateUrl: './create-project-model.component.html',
  styleUrl: './create-project-model.component.css'
})
export class CreateProjectModelComponent {


  constructor(private matdailog: MatDialog) { }
  startDate: Date = new Date();

  ngOnInit() { }
  isInputClicked = false;

}
