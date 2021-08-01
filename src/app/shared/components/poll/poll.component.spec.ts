import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { PollComponent } from './poll.component';

describe('PollComponent', () => {
  let component: PollComponent;
  let fixture: ComponentFixture<PollComponent>;
  let pollSubmittedSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        })
      ],
      declarations: [PollComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollComponent);
    component = fixture.componentInstance;
    pollSubmittedSpy = spyOn(component.pollSubmitted, 'emit');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate last update period', () => {
    const daysAgo = 15;
    const date = new Date();
    const expectedValue = `${daysAgo} days ago`;

    date.setDate(date.getDate() - daysAgo);
    component.lastUpdated = date.toISOString();

    expect(component.timeAgo).toEqual(expectedValue);
  });

  it('should fill out poll', () => {
    component.fillOutPoll(true);

    expect(component.isPositiveVote).toBeTrue();
    expect(component.filled).toBeTrue();
  });

  it('should submit positive poll', () => {
    component.filled = true;
    component.isPositiveVote = true;

    component.voteAction();

    expect(component.filled).toBeFalse();
    expect(component.submitted).toBeTrue();
    expect(pollSubmittedSpy).toHaveBeenCalledWith(true);
  });

  it('should submit negative poll', () => {
    component.filled = true;
    component.isPositiveVote = false;

    component.voteAction();

    expect(component.filled).toBeFalse();
    expect(component.submitted).toBeTrue();
    expect(pollSubmittedSpy).toHaveBeenCalledWith(false);
  });

  it('should reset poll', () => {
    component.submitted = true;

    component.voteAction();

    expect(component.filled).toBeFalse();
    expect(component.submitted).toBeFalse();
  });

  it("shouldn't execute any vote action", () => {
    component.filled = false;
    component.submitted = false;

    pollSubmittedSpy.calls.reset();

    component.voteAction();

    expect(pollSubmittedSpy).not.toHaveBeenCalled();
  });
});
