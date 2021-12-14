import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top20TracksComponent } from './top20-tracks.component';

describe('Top20TracksComponent', () => {
  let component: Top20TracksComponent;
  let fixture: ComponentFixture<Top20TracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top20TracksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top20TracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
