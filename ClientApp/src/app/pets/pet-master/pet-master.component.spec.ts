import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetMasterComponent } from './pet-master.component';

describe('PetMasterComponent', () => {
  let component: PetMasterComponent;
  let fixture: ComponentFixture<PetMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
