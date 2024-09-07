import { MonthDTO } from './MonthDTO';
import { MonthFactory } from './MonthFactory';
import { MonthNumber, WeekDayString } from '../types';
import { MonthUtils } from './MonthUtils';
import { firstDayOfWeekLookUp, weekLookUp } from '../constants';

export class MonthCalendarData {
  private monthFactory: MonthFactory = new MonthFactory();
  private monthUtils: MonthUtils = new MonthUtils();

  private prevMonth: MonthDTO;
  private currentMonth: MonthDTO;
  private nextMonth: MonthDTO;

  private firstDayOfWeek: WeekDayString;

  constructor(year: number, monthNumber: MonthNumber, firstDayOfWeek?: WeekDayString) {
    this.firstDayOfWeek = firstDayOfWeek || 'Mon';

    this.currentMonth = this.monthFactory.createCurrentMonth(year, monthNumber, firstDayOfWeek);

    this.prevMonth = this.monthFactory.createPreviouseMonthFrom(this.currentMonth);
    this.nextMonth = this.monthFactory.createNextMonthFrom(this.currentMonth);
  }

  generateData() {
    const prev = this.generatePrevMonthFormattedData();
    const curr = this.generateCurrMonthFormattedData();
    const next = this.generateNextMonthFormattedData();
    const weekStrings = weekLookUp[firstDayOfWeekLookUp[this.firstDayOfWeek]].dayString;
    return { weekStrings, prev, curr, next };
  }

  private generatePrevMonthFormattedData() {
    const firstWeekEmptyDays = this.monthUtils.getFirstWeekNumberOfEmptyDays(this.currentMonth);
    const prev = this.generateArrayOfPrevMonthDays()
      .reverse()
      .slice(0, firstWeekEmptyDays)
      .reverse();

    return prev.map((day) => {
      const date = new Date(this.prevMonth.year, this.prevMonth.monthIndex, day);
      const formattedDate = this.monthUtils.getFormattedDate({
        date,
        format: 'YYYY/MM/DD'
      });
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;

      return {
        year: this.prevMonth.year,
        monthNumber: this.prevMonth.monthIndex + 1,
        day,
        date: formattedDate,
        isWeekend
      };
    });
  }
  private generateCurrMonthFormattedData() {
    const curr = this.generateArrayOfCurrMonthDays();
    return curr.map((day) => {
      const date = new Date(this.currentMonth.year, this.currentMonth.monthIndex, day);
      const formattedDate = this.monthUtils.getFormattedDate({
        date,
        format: 'YYYY/MM/DD'
      });
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;

      return {
        year: this.currentMonth.year,
        monthNumber: this.currentMonth.monthIndex + 1,
        day,
        date: formattedDate,
        isWeekend
      };
    });
  }
  private generateNextMonthFormattedData() {
    const lastWeekEmptyDays = this.monthUtils.getLastWeekNumberOfEmptyDays(this.currentMonth);
    const next = this.generateArrayOfNextMonthDays().slice(0, lastWeekEmptyDays);
    return next.map((day) => {
      const date = new Date(this.nextMonth.year, this.nextMonth.monthIndex, day);
      const formattedDate = this.monthUtils.getFormattedDate({
        date,
        format: 'YYYY/MM/DD'
      });
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;

      return {
        year: this.nextMonth.year,
        monthNumber: this.nextMonth.monthIndex + 1,
        day,
        date: formattedDate,
        isWeekend
      };
    });
  }

  private generateArrayOfPrevMonthDays() {
    return this.monthUtils.getDaysArrayFor(this.prevMonth.year, this.prevMonth.monthIndex);
  }
  private generateArrayOfCurrMonthDays() {
    return this.monthUtils.getDaysArrayFor(this.currentMonth.year, this.currentMonth.monthIndex);
  }
  private generateArrayOfNextMonthDays() {
    return this.monthUtils.getDaysArrayFor(this.nextMonth.year, this.nextMonth.monthIndex);
  }
}
