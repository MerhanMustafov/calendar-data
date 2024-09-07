import { YearCalendarData } from '../year/YearCalendarData';

describe('YearCalendarData', () => {
  it('Test with empty initialization', () => {
    const currYear = new Date().getFullYear();
    const yearCalendarData = new YearCalendarData();

    expect(yearCalendarData.generateData()[1].curr[0].year).toBe(currYear);
  });
  it('Test with 2023', () => {
    const yearCalendarData = new YearCalendarData(2023);

    expect(yearCalendarData.generateData()[1].curr[0].year).toBe(2023);
  });
  it('Test with 2023 and MOnday as first day of week', () => {
    const yearCalendarData = new YearCalendarData(2023, 'Mon');

    expect(yearCalendarData.generateData()[1].curr[0].year).toBe(2023);
    expect(yearCalendarData.generateData()[1].weekStrings[0]).toBe('Mon');
  });
  it('Test if months all 12 months are present', () => {
    const yearCalendarData = new YearCalendarData(2024, 'Mon');

    expect(yearCalendarData.generateData()).toHaveProperty('1');
    expect(yearCalendarData.generateData()).toHaveProperty('2');
    expect(yearCalendarData.generateData()).toHaveProperty('3');
    expect(yearCalendarData.generateData()).toHaveProperty('4');
    expect(yearCalendarData.generateData()).toHaveProperty('5');
    expect(yearCalendarData.generateData()).toHaveProperty('6');
    expect(yearCalendarData.generateData()).toHaveProperty('7');
    expect(yearCalendarData.generateData()).toHaveProperty('8');
    expect(yearCalendarData.generateData()).toHaveProperty('9');
    expect(yearCalendarData.generateData()).toHaveProperty('10');
    expect(yearCalendarData.generateData()).toHaveProperty('11');
    expect(yearCalendarData.generateData()).toHaveProperty('12');
  });
});
