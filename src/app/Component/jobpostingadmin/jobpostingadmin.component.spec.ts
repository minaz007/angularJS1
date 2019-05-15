import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostingadminComponent } from './jobpostingadmin.component';

describe('JobpostingadminComponent', () => {
  let component: JobpostingadminComponent;
  let fixture: ComponentFixture<JobpostingadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobpostingadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobpostingadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
