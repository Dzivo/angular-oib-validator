# angular oib validator
[![Build Status](https://travis-ci.org/dzivo/angular-oib-validator.svg?branch=master)](https://travis-ci.org/dzivo/angular-oib-validator)
[![codecov](https://codecov.io/gh/dzivo/angular-oib-validator/branch/master/graph/badge.svg)](https://codecov.io/gh/dzivo/angular-oib-validator)
[![npm version](https://badge.fury.io/js/angular-oib-validator.svg)](http://badge.fury.io/js/angular-oib-validator)
[![devDependency Status](https://david-dm.org/dzivo/angular-oib-validator/dev-status.svg)](https://david-dm.org/dzivo/angular-oib-validator?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/dzivo/angular-oib-validator.svg)](https://github.com/dzivo/angular-oib-validator/issues)
[![GitHub stars](https://img.shields.io/github/stars/dzivo/angular-oib-validator.svg)](https://github.com/dzivo/angular-oib-validator/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/dzivo/angular-oib-validator/master/LICENSE)

## Demo
https://dzivo.github.io/angular-oib-validator/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Angular OIB validator

## Installation

Install through npm:
```
npm install --save angular-oib-validator
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { AngularOibValidatorModule } from 'angular-oib-validator';

@NgModule({
  imports: [
    AngularOibValidatorModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { OibValidator } from 'angular-oib-validator';

@Component({
  selector: 'oib-demo-app',
  template: `
  <div class="container">
    <form [formGroup]="form">
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
      'oib-simple': [null, [OibValidator.check]]
    });
  }
}
```

You may also find it useful to view the [demo source](https://github.com/dzivo/angular-oib-validator/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/angular-oib-validator/bundles/angular-oib-validator.umd.js"></script>
<script>
    // everything is exported angularOibValidator namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://dzivo.github.io/angular-oib-validator/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
