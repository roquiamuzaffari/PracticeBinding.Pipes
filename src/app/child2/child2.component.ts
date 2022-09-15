import { Component, OnInit } from '@angular/core';
import { DataService } from "../service/data.service";

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  count: any;
  constructor(private datasevice: DataService) {
  }
  ngOnInit() {

    this.datasevice.count.subscribe(c => {
      this.count = c;
    });
  }
  nextCount() {
    this.datasevice.nextCount();
  }
}