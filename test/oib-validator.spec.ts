import { OibValidators } from './../src/oib-validator';
import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { expect } from 'chai';
import { AngularOibValidatorModule } from '../src';

describe('oib-hello-world component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularOibValidatorModule.forRoot()
      ]
    });
  });

  it('should be valid oib', () => {
    expect(OibValidators.checkOib('22386011315')).to.equal(true);
  });

  it('should not be valid oib', () => {
    expect(OibValidators.checkOib('22386011314')).to.equal(false);
  });
});
