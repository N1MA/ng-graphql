import { TestBed } from '@angular/core/testing';

import { NgGraphqlService } from './ng-graphql.service';

describe('NgGraphqlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgGraphqlService = TestBed.get(NgGraphqlService);
    expect(service).toBeTruthy();
  });
});
