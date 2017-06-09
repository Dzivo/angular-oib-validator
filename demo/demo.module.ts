import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularOibValidatorModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, AngularOibValidatorModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}