import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  public formMode1;
  public catchTheValueEmitted(event: string) {
    this.formMode1 = event;
    alert(event);
  }

}
