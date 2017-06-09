import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { checkOibValidator } from '../src/oib-validator';

@Component({
  selector: 'oib-demo-app',
  template: `
  <div class="container">
    <form [formGroup]="form">
        <h1>OIB Validator</h1>
        <div class="form-group" [class.has-error]="isInvalidControl('oib')" [class.has-success]="this.form.get('oib').valid">
          <label class="control-label" for="oib">Input with error</label>
          <input type="text" class="form-control" id="oib" formControlName="oib" placeholder="OIB">
          <div *ngIf="isInvalidControl('oib')" id="oibError" class="help-block">
            <div *ngIf="form.controls.oib.errors?.validateOib">This doesn't appear to be a valid oib address.</div>
            <div *ngIf="form.controls.oib.errors?.required">This field is required.</div>
          </div>
        </div>
     </form>
  </div>
  `
})
export class DemoComponent implements OnInit {
  form: FormGroup;

  constructor(
    private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this._fb.group({
      'oib': [null, [Validators.required, checkOibValidator]]
    });
  }

  isInvalidControl(controlName: string): boolean {
    return !this.form.get(controlName).valid && !this.form.get(controlName).pristine;
  }
}
