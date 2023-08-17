import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoneComponent } from './pone.component';

describe('PoneComponent', () => {
  let component: PoneComponent;
  let fixture: ComponentFixture<PoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoneComponent]
    });
    fixture = TestBed.createComponent(PoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
