import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSupplementalComponent } from './banner-supplemental.component';

describe('BannerSupplementalComponent', () => {
  let component: BannerSupplementalComponent;
  let fixture: ComponentFixture<BannerSupplementalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerSupplementalComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSupplementalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
