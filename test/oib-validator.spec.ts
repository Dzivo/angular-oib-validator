import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { expect } from 'chai';
import { AngularOibValidatorModule } from '../src';
import { checkOib } from '../src/oib-validator';

describe('oib-hello-world component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularOibValidatorModule.forRoot()
      ]
    });
  });

  it('should be valid oib', () => {
    expect(checkOib('22386011315')).to.equal(true);
  });

  it('should not be valid oib', () => {
    expect(checkOib('22386011314')).to.equal(false);
  });
});
