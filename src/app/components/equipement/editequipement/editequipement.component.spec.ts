import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipementComponent } from './editequipement.component';

describe('EditEquipementComponent', () => {
  let component: EditEquipementComponent;
  let fixture: ComponentFixture<EditEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEquipementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
