import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediagalleryComponent } from './mediagallery.component';

describe('MediagalleryComponent', () => {
  let component: MediagalleryComponent;
  let fixture: ComponentFixture<MediagalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediagalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediagalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
