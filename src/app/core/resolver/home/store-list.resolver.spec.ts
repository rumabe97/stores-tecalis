import { TestBed } from '@angular/core/testing';

import { StoreListResolver } from './store-list.resolver';

describe('StoreListResolver', () => {
  let resolver: StoreListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StoreListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
