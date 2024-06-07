import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateboxComponent } from './updatebox.component';

describe('UpdateboxComponent', () => {
  let component: UpdateboxComponent;
  let fixture: ComponentFixture<UpdateboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateboxComponent]
    });
    fixture = TestBed.createComponent(UpdateboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
