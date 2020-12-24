import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/model/user.model';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {

  private isMobileResolution: boolean;
  
  constructor(
    private userService: UserService,
    private modalController: ModalController
  ) {  
    if (window.innerWidth < 768) {
    this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  ngOnInit() {}

  public onClose() {
    this.modalController.dismiss();
    this.userService.activatedEmitter.next(true);
  }
  
}
