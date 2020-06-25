import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  // @Output()
  // notify:EventEmitter<string> = new EventEmitter<string>();

  
  constructor() { }

  ngOnInit() {}

  onAddMode() {
    // alert('add');
    // this.notify.emit('AddMoko');
  }

  onEditMode() {
    // alert('edit');
    // this.notify.emit('EditMoko');
  }

}
