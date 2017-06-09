import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [DemoComponent]
})
export class DemoModule { }