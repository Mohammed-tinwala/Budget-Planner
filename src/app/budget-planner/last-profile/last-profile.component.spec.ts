import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastProfileComponent } from './last-profile.component';

describe('LastProfileComponent', () => {
  let component: LastProfileComponent;
  let fixture: ComponentFixture<LastProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
