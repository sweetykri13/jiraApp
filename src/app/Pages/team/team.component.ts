import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from '../../Interface/IUser';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  team: IUser[] = [];

  displayedColumns: string[] = ['id', 'name', 'email'];
  users: IUser[] = [
    { id: 1, name: 'John Doe', email: 'aohn@example.com' },
    { id: 2, name: 'Jane Smith', email: 'bane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'cob@example.com' },
    { id: 4, name: 'John Doe', email: 'dohn@example.com' },
    { id: 5, name: 'eane Smith', email: 'eane@example.com' },
    { id: 6, name: 'gob Johnson', email: 'eob@example.com' },
    { id: 7, name: 'hohn Doe', email: 'john@example.com' },
    { id: 8, name: 'wane Smith', email: 'fane@example.com' },
    { id: 9, name: 'Bob Johnson', email: 'bob@example.com' },
    { id: 10, name: 'yohn Doe', email: 'john@example.com' },
    { id: 11, name: 'zane Smith', email: 'jane@example.com' },
    { id: 12, name: 'wob Johnson', email: 'bob@example.com' },
    { id: 13, name: 'tohn Doe', email: 'lohn@example.com' },
    { id: 14, name: 'eane Smith', email: 'jane@example.com' },
    { id: 15, name: 'wob Johnson', email: 'mob@example.com' },
    { id: 16, name: 'rohn Doe', email: 'nohn@example.com' },
    { id: 17, name: 'tane Smith', email: 'kane@example.com' },
    { id: 18, name: 'iob Johnson', email: 'yob@example.com' }
  ];

  dataSource: MatTableDataSource<IUser>;

  //@ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator!: MatPaginator ;

  constructor() {
    this.dataSource = new MatTableDataSource<IUser>(this.users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  sortData(sort: Sort) {
    const data = this.users.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
