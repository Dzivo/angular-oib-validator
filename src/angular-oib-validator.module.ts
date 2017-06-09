import { OibValidator } from './oib-validator';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OibValidator
  ]
})
export class AngularOibValidatorModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularOibValidatorModule
    };
  }

}