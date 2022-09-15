import { Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
data={
  name:'Rohit',
  age:30,
  email:'rohir@gmail.com'

}
  items = ['Rohit', 'Priya', 'Sonu', 'Rumi'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  
}


