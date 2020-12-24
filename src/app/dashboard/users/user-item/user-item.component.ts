import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from 'src/app/core/model/user.model';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {

  @Input()
  public userDetailModal: User;
  public id: number;
  public userDetail: User;
  private isMobileResolution: boolean;
  private show: boolean = false;
  private loading: HTMLIonLoadingElement;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private modalController: ModalController,
    private loadingController: LoadingController,
  ) {
      if (window.innerWidth < 768) {
      this.isMobileResolution = true;
      } else {
        this.isMobileResolution = false;
      }
   }

  ngOnInit() {
    this.showLoadingController().then((_) => {
      this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.userService.getUser(this.id).subscribe(
            data => {
              this.userDetail = data;
              this.loading.dismiss();
              this.show = true;
            }
          );
        }
      );
    });
  }

  public onClose() {
    this.modalController.dismiss();
  }

  public async showLoadingController() {
    this.loading = await this.loadingController.create({
      message: "Loading...",
    });

    return await this.loading.present();
  }

}
