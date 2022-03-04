import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaMedicinaComponent } from './bolsa-medicina.component';

describe('BolsaMedicinaComponent', () => {
  let component: BolsaMedicinaComponent;
  let fixture: ComponentFixture<BolsaMedicinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolsaMedicinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsaMedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
