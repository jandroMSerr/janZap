import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesummaryComponent } from './purchasesummary.component';

describe('PurchasesummaryComponent', () => {
  let component: PurchasesummaryComponent;
  let fixture: ComponentFixture<PurchasesummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasesummaryComponent]
    });
    fixture = TestBed.createComponent(PurchasesummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
