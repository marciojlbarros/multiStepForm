import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsencaoTaxaComponent } from './isencao-taxa.component';

describe('IsencaoTaxaComponent', () => {
  let component: IsencaoTaxaComponent;
  let fixture: ComponentFixture<IsencaoTaxaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsencaoTaxaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsencaoTaxaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
