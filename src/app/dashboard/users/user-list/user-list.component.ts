import { ActivatedRoute, Params } from '@angular/router';
import { UserAddComponent } from './../user-add/user-add.component';
import { UserFormModalComponent } from './../user-form/user-form-modal/user-form-modal.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/model/user.model';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserItemComponent } from '../user-item/user-item.component';

// import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  

  // @Output()
  // notify:EventEmitter<string> = new EventEmitter<string>();
  private loading: HTMLIonLoadingElement;
  private activatedSub: Subscription;
  private isMobileResolution: boolean;
  pager: any;

  constructor(
    private userService: UserService,
    private loadingController: LoadingController,
    public modalController: ModalController,
    private route: ActivatedRoute,
  ) { 
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  pageOfItems: Array<any>;
  public pathUrl;
  public firstUrl;
  public nextUrl;
  public previousUrl;
  public lastUrl;
  public totalPages;
  public currentPageUrl;
  public showMoreUrl;
  public total;

  public slice;
  private initialPage = 0;
  private maxPages = 7;
  public start = this.initialPage;
  public end = this.maxPages;
  public error = null;
  private errorSub: Subscription;

  loadedUsers: User[] = [];
  userActivated = false;
  items = [];

  ngOnInit() {
    
    this.errorSub = this.userService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    // console.log(this.loadedUsers)
    this.onfetchUsers();
    this.activatedSub = this.userService.activatedEmitter.subscribe(didActivate => {
      if (didActivate){
        this.onfetchUsers();
      }
    });
    // this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
    // this.items = Array(150).fill(0).map((x, i) => (this.loadedUsers));

    this.userService.error.subscribe((errorMessage) => {
      if (errorMessage) {
        this.handleFailedCodeError(errorMessage);
      }
    });

  }

  onHandleError() {
    this.error = null;
    this.userService.activatedEmitter.next(true);
  }
  
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  onfetchUsers() { 
    this.showLoadingController().then((_) => {
      this.fetchUsers(0);
    });
  }

  firstPage(offset: any) {
    this.showLoadingController().then((_) => {
      this.fetchUsers(offset);
    });
  }

  nextPage(offset: any) {
    this.showLoadingController().then((_) => {
      this.fetchUsers(offset);
    });
  }

  previousPage(offset: any) {
    this.showLoadingController().then((_) => {
      this.fetchUsers(offset);
    });
  }

  lastPage(offset: any) {
    this.showLoadingController().then((_) => {
      this.fetchUsers(offset);
    });
  }
  
  showMore(offset: any) {
    this.showLoadingController().then((_) => {
      this.fetchUsers(offset);
    });
  }

  pageNo(offset: any) {
    this.showLoadingController().then((_) => {
      this.fetchUsers(offset);
    });
  }

  fetchUsers(offset: any) {
    this.userService.fetchUsers(offset).subscribe(
      data => {
        console.log(data);
      
      this.loading.dismiss();
      // console.log(data);
      const userArray: User[] = [];
      for (const key in data.data) {
        userArray.push(data.data[key])
      }

      if (this.isMobileResolution) {

        this.loadedUsers = this.loadedUsers.concat(userArray);
        this.showMoreUrl = data.next_page_url;

      } else {

        this.loadedUsers = userArray;
        this.pathUrl = data.path + '?page=';
        this.firstUrl = data.first_page_url;
        this.nextUrl = data.next_page_url;
        this.previousUrl = data.prev_page_url;
        this.lastUrl = data.last_page_url;
        this.totalPages = data.last_page;
        this.currentPageUrl = data.current_page;
        let currentPageNo = data.current_page;

        let startEnd = this.createPageRange(currentPageNo);
        let start = startEnd[0];
        let end = startEnd[startEnd.length - 2];
       
        if (this.end === +start) {
          this.start = start - 1;
          this.end = end;
          console.log(end)
        }

        if (this.start === +start) {
          this.start = start - 1;
          this.end = end;
        }

        if (+currentPageNo === 1) {
          this.start = this.initialPage;
          this.end = this.maxPages;
        }

        if (+this.totalPages === +start) {
          this.start = start - this.maxPages;
          this.end = start;
        }

        this.items = Array(this.totalPages).fill(0).map(
          (x, i) => 
          (
            { 
              id: (i + 1)
            }
          )
        );

      }

      this.total = data.total;
    }, 
    error => {
      this.userService.error.next(error);
      this.loading.dismiss();
      // this.error = error.message;
      // console.log(error);
    });
  }

  private handleFailedCodeError(errorMessage: string) {
    this.error = errorMessage;
  }
  
  createPageRange(current_page){
    var items: number[] = [];
    for(var i = current_page; i <= current_page + this.maxPages; i++){
       items.push(i);
    }
    return items;
  }

  onAddMode() {
    // alert('add');
    // this.notify.emit('AddMoko');
  }

  onEditMode() {
    // alert('edit');
    // this.notify.emit('EditMoko');
  }

  public async showLoadingController() {
    this.loading = await this.loadingController.create({
      message: "Loading...",
    });

    return await this.loading.present();
  }

  // ngOnDestroy() {
  //   this.activatedSub.unsubscribe();
  // }

  public openModalForm(): void {
    // this.getProductPhotos().then(productPhotos => {
    //   this.modalController.create({
    //     component: PhotoViewerComponent,
    //     componentProps: {
    //       'selectedPhotos': productPhotos
    //     }
    //   }).then(val => val.present());
    // })
    
    // alert('s')

    this.modalController.create({
      // component: UserFormModalComponent,
      component: UserAddComponent,
    }).then(val => val.present());
  }


  public userDetailModal(id: number): void {
    // this.getProductPhotos().then(productPhotos => {
    //   this.modalController.create({
    //     component: UserAddComponent,
    //     componentProps: {
    //         'id': id
    //       }
    //   }).then(val => val.present());
    // })

    this.userService.getUser(id).subscribe(
      data => {
        this.modalController.create({
          component: UserItemComponent,
          componentProps: {
              'userDetailModal': data
            }
        }).then(val => val.present());
      }
    );
  }
}
