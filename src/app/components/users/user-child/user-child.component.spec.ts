import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChildComponent } from './user-child.component';

describe('UserChildComponent', () => {
  let component: UserChildComponent;
  let fixture: ComponentFixture<UserChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
