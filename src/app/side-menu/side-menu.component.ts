import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  constructor(
    private menu: MenuController,
    private userService: UserService
  ) { }

  ngOnInit() {}

  openFirst() {
    this.menu.enable(true, 'start');
    this.menu.open('start');
    alert(this.menu.close)
  }

  onfetchUsers() {
    this.userService.activatedEmitter.next(true);
  }
}
