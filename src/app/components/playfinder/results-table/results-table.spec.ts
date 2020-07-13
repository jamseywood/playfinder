import { async, TestBed } from '@angular/core/testing';
import { ResultsTableComponent } from './results-table.component';

describe('ResultsTableComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ResultsTableComponent
            ],
        }).compileComponents();
    }));

    it(`should have as title 'Results Table'`, () => {
        const fixture = TestBed.createComponent(ResultsTableComponent);
        const comp = fixture.componentInstance;
        expect(comp.title).toEqual('Results Table');
    });

    it('should calculate duration under 1 hour', () => {
        const fixture = TestBed.createComponent(ResultsTableComponent);
        const comp = fixture.componentInstance;
        const endDate = Date.parse('2020-07-01T13:20:00+01:00');
        const startDate = Date.parse('2020-07-01T12:40:00+01:00');
        const duration = comp.getDuration(startDate, endDate);
        expect(duration).toEqual('0 hours 40 minutes');
    })

    it('should calculate duration over 1 hour', () => {
        const fixture = TestBed.createComponent(ResultsTableComponent);
        const comp = fixture.componentInstance;
        const endDate = Date.parse('2020-07-01T13:20:00+01:00');
        const startDate = Date.parse('2020-07-01T11:40:00+01:00');
        const duration = comp.getDuration(startDate, endDate);
        expect(duration).toEqual('1 hours 40 minutes');
    })


    //example of a negative test case
    it('should thow an error', () => {
        const fixture = TestBed.createComponent(ResultsTableComponent);
        const comp = fixture.componentInstance;
        const endDate = Date.parse('2020-07-01T13:20:00+01:00');
        const startDate = Date.parse('2020-07-01T11:40:00+01:00');
        expect(function () { comp.getDuration(endDate, startDate) }).toThrow(new Error("invalid date range"))
    })
});
