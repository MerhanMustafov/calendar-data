import { WeekDayString } from '../types';
import { MonthCalendarData } from '../month/MonthCalendarData';

describe('MonthCalendarData: ', () => {
  describe('Test generateData: January 2024', () => {
    let monthCalendarData: MonthCalendarData;
    describe('First Day of week - Monday', () => {
      const FIRST_DAY_OF_WEEK_MONDAY: WeekDayString = 'Mon';
      beforeAll(() => {
        monthCalendarData = new MonthCalendarData(2024, 1, FIRST_DAY_OF_WEEK_MONDAY);
      });
      it('prevMonthDays length', () => {
        const data = monthCalendarData.generateData();

        const prevMonthDays = data.prev;
        expect(prevMonthDays.length).toBe(0);
      });
      it('currentMonthDays length', () => {
        const data = monthCalendarData.generateData();
        const currMonthDays = data.curr;
        expect(currMonthDays.length).toBe(31);
      });
      it('nextMonthDays length', () => {
        const data = monthCalendarData.generateData();
        const nextMonthDays = data.next;
        expect(nextMonthDays.length).toBe(4);
      });
    });
    describe('First Day of week - Tuesday', () => {
      const FIRST_DAY_OF_WEEK_TUESDAY: WeekDayString = 'Tue';
      beforeAll(() => {
        monthCalendarData = new MonthCalendarData(2024, 1, FIRST_DAY_OF_WEEK_TUESDAY);
      });
      it('prevMonthDays length', () => {
        const data = monthCalendarData.generateData();

        const prevMonthDays = data.prev;
        expect(prevMonthDays.length).toBe(6);
      });
      it('currentMonthDays length', () => {
        const data = monthCalendarData.generateData();
        const currMonthDays = data.curr;
        expect(currMonthDays.length).toBe(31);
      });
      it('nextMonthDays length', () => {
        const data = monthCalendarData.generateData();
        const nextMonthDays = data.next;
        expect(nextMonthDays.length).toBe(5);
      });
    });
    describe('First Day of week - Wednesday', () => {
      const FIRST_DAY_OF_WEEK_WEDNESDAY: WeekDayString = 'Wed';
      beforeAll(() => {
        monthCalendarData = new MonthCalendarData(2024, 1, FIRST_DAY_OF_WEEK_WEDNESDAY);
      });
      it('prevMonthDays length', () => {
        const data = monthCalendarData.generateData();

        const prevMonthDays = data.prev;
        expect(prevMonthDays.length).toBe(5);
      });
      it('currentMonthDays length', () => {
        const data = monthCalendarData.generateData();
        const currMonthDays = data.curr;
        expect(currMonthDays.length).toBe(31);
      });
      it('nextMonthDays length', () => {
        const data = monthCalendarData.generateData();
        const nextMonthDays = data.next;
        expect(nextMonthDays.length).toBe(6);
      });
    });
    describe('First Day of week - Thursday', () => {
      const FIRST_DAY_OF_WEEK_THURSDAY: WeekDayString = 'Thu';
      beforeAll(() => {
        monthCalendarData = new MonthCalendarData(2024, 1, FIRST_DAY_OF_WEEK_THURSDAY);
      });
      it('prevMonthDays length', () => {
        const data = monthCalendarData.generateData();

        const prevMonthDays = data.prev;
        expect(prevMonthDays.length).toBe(4);
      });
      it('currentMonthDays length', () => {
        const data = monthCalendarData.generateData();
        const currMonthDays = data.curr;
        expect(currMonthDays.length).toBe(31);
      });
      it('nextMonthDays length', () => {
        const data = monthCalendarData.generateData();
        const nextMonthDays = data.next;
        expect(nextMonthDays.length).toBe(0);
      });
    });
    describe('First Day of week - Friday', () => {
      const FIRST_DAY_OF_WEEK_FRIDAY: WeekDayString = 'Fri';
      beforeAll(() => {
        monthCalendarData = new MonthCalendarData(2024, 1, FIRST_DAY_OF_WEEK_FRIDAY);
      });
      it('prevMonthDays length', () => {
        const data = monthCalendarData.generateData();

        const prevMonthDays = data.prev;
        expect(prevMonthDays.length).toBe(3);
      });
      it('currentMonthDays length', () => {
        const data = monthCalendarData.generateData();
        const currMonthDays = data.curr;
        expect(currMonthDays.length).toBe(31);
      });
      it('nextMonthDays length', () => {
        const data = monthCalendarData.generateData();
        const nextMonthDays = data.next;
        expect(nextMonthDays.length).toBe(1);
      });
    });
    describe('First Day of week - Saturday', () => {
      const FIRST_DAY_OF_WEEK_SATURDAY: WeekDayString = 'Sat';
      beforeAll(() => {
        monthCalendarData = new MonthCalendarData(2024, 1, FIRST_DAY_OF_WEEK_SATURDAY);
      });
      it('prevMonthDays length', () => {
        const data = monthCalendarData.generateData();

        const prevMonthDays = data.prev;
        expect(prevMonthDays.length).toBe(2);
      });
      it('currentMonthDays length', () => {
        const data = monthCalendarData.generateData();
        const currMonthDays = data.curr;
        expect(currMonthDays.length).toBe(31);
      });
      it('nextMonthDays length', () => {
        const data = monthCalendarData.generateData();
        const nextMonthDays = data.next;
        expect(nextMonthDays.length).toBe(2);
      });
    });
    describe('First Day of week - Sunday', () => {
      const FIRST_DAY_OF_WEEK_SUNDAY: WeekDayString = 'Sun';
      beforeAll(() => {
        monthCalendarData = new MonthCalendarData(2024, 1, FIRST_DAY_OF_WEEK_SUNDAY);
      });
      it('prevMonthDays length', () => {
        const data = monthCalendarData.generateData();

        const prevMonthDays = data.prev;
        expect(prevMonthDays.length).toBe(1);
      });
      it('currentMonthDays length', () => {
        const data = monthCalendarData.generateData();
        const currMonthDays = data.curr;
        expect(currMonthDays.length).toBe(31);
      });
      it('nextMonthDays length', () => {
        const data = monthCalendarData.generateData();
        const nextMonthDays = data.next;
        expect(nextMonthDays.length).toBe(3);
      });
    });
  });
  describe('Test MonthCalendarData ', () => {
    it('Test Monday first day of week', () => {
      const monthCalendarData = new MonthCalendarData(2024, 2, 'Mon');
      const data = monthCalendarData.generateData();
      expect(data.weekStrings[0]).toBe('Mon');
    });
    it('Test Tuesday first day of week', () => {
      const monthCalendarData = new MonthCalendarData(2024, 2, 'Tue');
      const data = monthCalendarData.generateData();
      expect(data.weekStrings[0]).toBe('Tue');
    });
  });
  describe('Test generateData fields present WeekStrings', () => {
    let monthCalendarData: MonthCalendarData;

    beforeAll(() => {
      monthCalendarData = new MonthCalendarData(2024, 2);
    });

    it('Test weekStrings field present', () => {
      const data = monthCalendarData.generateData();
      expect(data).toHaveProperty('weekStrings');
    });
  });
  describe('Test generateData fields present PREV', () => {
    let monthCalendarData: MonthCalendarData;

    beforeAll(() => {
      monthCalendarData = new MonthCalendarData(2024, 2);
    });

    it('Test all fields preset', () => {
      const data = monthCalendarData.generateData();
      expect(data.curr[0]).toHaveProperty('year');
      expect(data.curr[0]).toHaveProperty('monthNumber');
      expect(data.curr[0]).toHaveProperty('day');
      expect(data.curr[0]).toHaveProperty('date');
      expect(data.curr[0]).toHaveProperty('isWeekend');
    });
  });
  describe('Test generateData fields present CURRENT', () => {
    let monthCalendarData: MonthCalendarData;

    beforeAll(() => {
      monthCalendarData = new MonthCalendarData(2024, 2);
    });

    it('Test all fields present', () => {
      const data = monthCalendarData.generateData();
      expect(data.curr[0]).toHaveProperty('year');
      expect(data.curr[0]).toHaveProperty('monthNumber');
      expect(data.curr[0]).toHaveProperty('day');
      expect(data.curr[0]).toHaveProperty('date');
      expect(data.curr[0]).toHaveProperty('isWeekend');
    });
  });
  describe('Test generateData fields present NEXT', () => {
    let monthCalendarData: MonthCalendarData;

    beforeAll(() => {
      monthCalendarData = new MonthCalendarData(2024, 2);
    });

    it('Test all fields preset', () => {
      const data = monthCalendarData.generateData();
      expect(data.curr[0]).toHaveProperty('year');
      expect(data.curr[0]).toHaveProperty('monthNumber');
      expect(data.curr[0]).toHaveProperty('day');
      expect(data.curr[0]).toHaveProperty('date');
      expect(data.curr[0]).toHaveProperty('isWeekend');
    });
  });
});
