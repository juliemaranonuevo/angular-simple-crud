import { Component, OnInit, Input } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  // public productForm = this.fb.group({
  //   code: [null, Validators.required],
  //   name: [null, Validators.required],
  // });


  constructor(
    // private fb:FormBuilder
  ) { }

  ngOnInit() {}

  public onSubmit():void {
      // this.productForm.markAllAsTouched();
  }
}
