import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopstoreComponent } from './laptopstore.component';

describe('LaptopstoreComponent', () => {
  let component: LaptopstoreComponent;
  let fixture: ComponentFixture<LaptopstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
