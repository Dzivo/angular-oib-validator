import { OibValidator } from './../src/oib-validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'oib-demo-app',
  template: `
  <div class="container">
    <form [formGroup]="form">
        <h1>OIB Validator Bootstrap</h1>
        <div class="form-group" [class.has-error]="isInvalidControl('oib')" [class.has-success]="this.form.get('oib').valid">
          <label class="control-label" for="oib">Input with error</label>
          <input type="text" class="form-control" id="oib" formControlName="oib" placeholder="OIB">
          <div *ngIf="isInvalidControl('oib')" id="oibError" class="help-block">
            <div *ngIf="form.controls.oib.errors?.validateOib">This doesn't appear to be a valid oib address.</div>
            <div *ngIf="form.controls.oib.errors?.required">This field is required.</div>
          </div>
        </div>

        <h1>Simple Example Validator</h1>
        <input type="text" formControlName="oib-simple">
        <div *ngIf="form.controls.oib-simple.errors?.validateOib">This doesn't appear to be a valid oib address.</div>
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
      'oib': [null, [Validators.required, OibValidator.check]],
      'oib-simple': [null, OibValidator.check]
    });
  }

  isInvalidControl(controlName: string): boolean {
    return !this.form.get(controlName).valid && !this.form.get(controlName).pristine;
  }
}
