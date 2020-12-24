import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/model/user.model';

const DEFAULT_CROPPED_IMAGE = "assets/icon/photo.png";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  id: number;
  editMode = false;
  userForm: FormGroup;
  public isSavingUserDetails: boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }
  
  public croppedImage: string = DEFAULT_CROPPED_IMAGE;
  
  onSubmit() {
    
    this.userForm.markAllAsTouched();
    if (this.userForm.valid || this.userForm.status === "PENDING") {
      if (this.editMode) {
        // this.updateUserDetails();
      } else {
        this.saveUserDetails();
      }
    }

    if (this.userForm.invalid) {
      alert('Not Okay')
    }

  }

  private saveUserDetails(): void {
    this.isSavingUserDetails = true;
    this.userService.addUser(this.userForm.value).subscribe(
    //  (output) => {console.log(output)},
     this.isSavingProductDetailsSuccessful.bind(this),
    );
  }

  private isSavingProductDetailsSuccessful(data): void {
    this.resetUserForm();
    this.isSavingUserDetails = false;
    console.log(data.message),
    alert(data.message);
  }

  private resetUserForm() {
    this.userForm.reset();
  }

  //Validation
  public get isFirstNameEmpty(): boolean {
    let firstName = this.userForm.controls.firstName;
    if (firstName.invalid) {
      return firstName.errors.required && firstName.touched;
    } else {
      return false;
    }
  }

  public get isFirstNameHasInvalidInput(): boolean {
    let firstName = this.userForm.controls.firstName;
    if (firstName.invalid) {
      return firstName.errors.pattern && firstName.touched;
    } else {
      return false;
    }
  }

  public get isMiddleNameEmpty(): boolean {
    let middleName = this.userForm.controls.middleName;
    if (middleName.invalid) {
      return middleName.errors.required && middleName.touched;
    } else {
      return false;
    }
  }

  public get isLastNameEmpty(): boolean {
    let lastName = this.userForm.controls.lastName;
    if (lastName.invalid) {
      return lastName.errors.required && lastName.touched;
    } else {
      return false;
    }
  }

  public get isAddressEmpty(): boolean {
    let address = this.userForm.controls.address;
    if (address.invalid) {
      return address.errors.required && address.touched;
    } else {
      return false;
    }
  }

  public get isEmaillAddressEmpty(): boolean {
    let emailAddress = this.userForm.controls.emailAddress;
    if (emailAddress.invalid) {
      return emailAddress.errors.required && emailAddress.touched;
    } else {
      return false;
    }
  }

  public get isEmaillAddressInvalid(): boolean {
    let emailAddress = this.userForm.controls.emailAddress;
    if (emailAddress.invalid) {
      return emailAddress.errors.email && emailAddress.touched;
    } else {
      return false;
    }
  }

  public get isContactNumberEmpty(): boolean {
    let contactNumber = this.userForm.controls.contactNumber;
    if (contactNumber.invalid) {
      return contactNumber.errors.required && contactNumber.touched;
    } else {
      return false;
    }
  }

  public get isContactNumberLengthInvalid(): boolean {
    let contactNumber = this.userForm.controls.contactNumber;
    if (contactNumber.invalid) {
      return (contactNumber.errors.minlength || contactNumber.errors.maxlength) && contactNumber.touched;
    } else {
      return false;
    }
  }

  public get isContactNumberInvalid(): boolean {
    let contactNumber = this.userForm.controls.contactNumber;
    if (contactNumber.invalid) {
      return contactNumber.errors.pattern && contactNumber.touched;
    } else {
      return false;
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
 
  private initForm() { 
    let userId = '';
    let firstName = '';
    let middleName = '';
    let lastName = '';
    let extensionName = '';
    let emailAddress = '';
    let contactNumber = '';

    if (this.editMode) { 
      
    }

    this.userForm = new FormGroup({
      'userId': new FormControl(userId, [Validators.required]),
      'firstName': new FormControl(firstName, [Validators.required, Validators.pattern('[a-zA-Z ]*'),]),
      'middleName': new FormControl(middleName, Validators.required),
      'lastName': new FormControl(lastName, Validators.required),
      'extensionName': new FormControl(extensionName),
      'address': new FormControl(emailAddress, Validators.required),
      'emailAddress': new FormControl(contactNumber, [Validators.required, Validators.email]),
      'contactNumber': new FormControl(
        null, [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.pattern("^[0-9]*$")
        ])
    }, { updateOn: 'blur' });

    this.userForm.statusChanges.subscribe(
      (status) => {
        this.isSavingUserDetails = status === 'INVALID' ? true : false;
        console.log(status) 
      }
    );
  }
}