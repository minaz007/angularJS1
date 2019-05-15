import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostinguserComponent } from './jobpostinguser.component';

describe('JobpostinguserComponent', () => {
  let component: JobpostinguserComponent;
  let fixture: ComponentFixture<JobpostinguserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobpostinguserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobpostinguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
