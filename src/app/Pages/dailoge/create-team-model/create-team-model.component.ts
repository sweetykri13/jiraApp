import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-team-model',
  templateUrl: './create-team-model.component.html',
  styleUrl: './create-team-model.component.css'
})
export class CreateTeamModelComponent {

  constructor(private dailog:MatDialog) { }

  ngOnInit() { }

}
