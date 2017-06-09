import { Component } from '@angular/core';

@Component({
  selector: 'oib-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'angular oib validator';
}
