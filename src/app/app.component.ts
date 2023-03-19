import { Component } from '@angular/core';
import { TableServiceService } from './services/table-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle: string  = 'Acme Product Management';
  posts: string[] = ['id','userId','title','body']
  constructor(private tableService: TableServiceService) {
    this.tableService.getData().subscribe(data => {
      //this.posts = data;
      console.log("data",data)
    })
  }
}
