import { Component, ViewChild } from '@angular/core';
import { TableServiceService } from './services/table-service.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  userId: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle: string  = 'Acme Product Management';
  displayedColumns: string[] = ['id','userId','title','body'];
  dataSource!: MatTableDataSource<UserData>; 
  posts:any;

  constructor(private tableService: TableServiceService) {
    this.tableService.getData().subscribe(data => {
      this.posts = data;
      this.dataSource = new MatTableDataSource(this.posts)
    })
  }
}
