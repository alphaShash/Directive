import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCOmpComponent } from './new-comp.component';

describe('NewCOmpComponent', () => {
  let component: NewCOmpComponent;
  let fixture: ComponentFixture<NewCOmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCOmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCOmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
