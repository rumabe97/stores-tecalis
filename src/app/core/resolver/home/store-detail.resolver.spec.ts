import { TestBed } from '@angular/core/testing';

import { StoreDetailResolver } from './store-detail.resolver';

describe('StoreDetailResolver', () => {
  let resolver: StoreDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StoreDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
