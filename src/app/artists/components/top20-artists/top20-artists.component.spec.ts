import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top20ArtistsComponent } from './top20-artists.component';

describe('Top20ArtistsComponent', () => {
  let component: Top20ArtistsComponent;
  let fixture: ComponentFixture<Top20ArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top20ArtistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top20ArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
