import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsitClientComponent } from './lsit-client.component';

describe('LsitClientComponent', () => {
  let component: LsitClientComponent;
  let fixture: ComponentFixture<LsitClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsitClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsitClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
