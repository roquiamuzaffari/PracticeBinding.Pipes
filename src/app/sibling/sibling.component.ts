import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
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
