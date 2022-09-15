import { Component, OnInit } from '@angular/core';
import { DataService } from "../service/data.service";

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

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
