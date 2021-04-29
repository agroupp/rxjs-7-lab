import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisesDemoComponent } from './promises-demo.component';

describe('PromisesDemoComponent', () => {
  let component: PromisesDemoComponent;
  let fixture: ComponentFixture<PromisesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromisesDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
