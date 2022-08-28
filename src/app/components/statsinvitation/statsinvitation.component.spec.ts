import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsinvitationComponent } from './statsinvitation.component';

describe('StatsinvitationComponent', () => {
  let component: StatsinvitationComponent;
  let fixture: ComponentFixture<StatsinvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsinvitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsinvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});