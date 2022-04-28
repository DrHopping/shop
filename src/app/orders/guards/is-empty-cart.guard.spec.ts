import { TestBed } from '@angular/core/testing';

import { IsEmptyCartGuard } from './is-empty-cart.guard';

describe('IsEmptyCartGuard', () => {
  let guard: IsEmptyCartGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsEmptyCartGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
