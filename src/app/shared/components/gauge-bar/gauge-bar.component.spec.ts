import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeBarComponent } from './gauge-bar.component';
import { gaugeBarConstants as constants } from './gauge-bar.constants';

describe('GaugeBarComponent', () => {
  let component: GaugeBarComponent;
  let fixture: ComponentFixture<GaugeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GaugeBarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeBarComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate percentage values', () => {
    const expectedPercentage = 50;

    component.negative = 2;
    component.positive = 2;

    fixture.detectChanges();

    expect(component.negativePercentage).toEqual(expectedPercentage);
    expect(component.positivePercentage).toEqual(expectedPercentage);
  });

  it('should calculate rounded percentage values', () => {
    const negative = 2;
    const positive = 4;
    const total = negative + positive;
    const expectedNegative = Number(((negative * constants.percentFactor) / total).toFixed(constants.decimalsLimit));
    const expectedPositive = Number(((positive * constants.percentFactor) / total).toFixed(constants.decimalsLimit));

    component.negative = negative;
    component.positive = positive;

    fixture.detectChanges();

    expect(component.negativePercentage).toEqual(expectedNegative);
    expect(component.positivePercentage).toEqual(expectedPositive);
  });
});
