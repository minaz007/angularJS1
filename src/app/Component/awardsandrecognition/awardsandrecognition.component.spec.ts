import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsandrecognitionComponent } from './awardsandrecognition.component';

describe('AwardsandrecognitionComponent', () => {
  let component: AwardsandrecognitionComponent;
  let fixture: ComponentFixture<AwardsandrecognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardsandrecognitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsandrecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
