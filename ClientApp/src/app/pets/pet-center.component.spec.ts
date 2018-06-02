import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCenterComponent } from './pet-center.component';

describe('PetCenterComponent', () => {
  let component: PetCenterComponent;
  let fixture: ComponentFixture<PetCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
