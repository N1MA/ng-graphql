import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGraphqlComponent } from './ng-graphql.component';

describe('NgGraphqlComponent', () => {
  let component: NgGraphqlComponent;
  let fixture: ComponentFixture<NgGraphqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGraphqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGraphqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
