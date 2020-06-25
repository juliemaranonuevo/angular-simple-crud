import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  public productForm = this.fb.group({
    code: [null, Validators.required],
    name: [null, Validators.required],
  });

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {}

  public onSubmit():void {
      this.productForm.markAllAsTouched();
  }
}
