import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsEditComponent } from './requests-edit.component';

describe('RequestsEditComponent', () => {
  let component: RequestsEditComponent;
  let fixture: ComponentFixture<RequestsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
