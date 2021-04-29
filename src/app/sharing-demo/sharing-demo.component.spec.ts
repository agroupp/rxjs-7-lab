import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingDemoComponent } from './sharing-demo.component';

describe('SharingDemoComponent', () => {
  let component: SharingDemoComponent;
  let fixture: ComponentFixture<SharingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharingDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
