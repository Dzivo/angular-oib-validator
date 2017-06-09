import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { expect } from 'chai';
import { OibValidator } from '../src/oib-validator';

describe('oib-hello-world component', () => {

  it('should be valid oib', () => {
    expect(OibValidator.checkOib('22386011315')).to.equal(true);
  });

  it('should not be valid oib', () => {
    expect(OibValidator.checkOib('22386011314')).to.equal(false);
  });
});
