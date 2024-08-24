import { firstDayOfWeekLookUp, weekLookUp } from '../constants';
import { MonthDTO } from './MonthDTO';
import { MonthFactory } from './MonthFactory';
import { MonthNumber, WeekDayIndex, WeekDayNumber, WeekDayString } from '../types';
import { MonthUtils } from './MonthUtils';

export class MonthCalendarData {
  private monthFactory: MonthFactory = new MonthFactory();
  private monthUtils: MonthUtils = new MonthUtils();

  private prevMonth: MonthDTO;
  private currentMonth: MonthDTO;
  private nextMonth: MonthDTO;

  private firstDayOfWeekString: WeekDayString = 'Mon';

  constructor(year: number, monthNumber: MonthNumber, firstDayOfWeek?: WeekDayString) {
    this.currentMonth = this.monthFactory.createCurrentMonth(year, monthNumber);

    this.prevMonth = this.monthFactory.createPreviouseMonthFrom(this.currentMonth);
    this.nextMonth = this.monthFactory.createNextMonthFrom(this.currentMonth);

    this.firstDayOfWeekString = firstDayOfWeek || 'Mon';
  }

  generateData() {
    const prev = this.generatePrevMonthFormattedData();
    const curr = this.generateCurrMonthFormattedData();
    const next = this.generateNextMonthFormattedData();
    return { prev, curr, next };
  }

  private generatePrevMonthFormattedData() {
    const firstWeekEmptyDays = this.generateFirstWeekEmptyDays();
    const prev = this.generateArrayOfPrevMonthDays()
      .reverse()
      .slice(0, firstWeekEmptyDays)
      .reverse();

    return prev.map((day) => {
      const date = new Date(this.prevMonth.year, this.prevMonth.monthIndex, day);
      const formattedDate = this.getFormattedDate(date);
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
      const formattedDate = this.getFormattedDate(date);
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
    const lastWeekEmptyDays = this.generateLastWeekEmptyDays();
    const next = this.generateArrayOfNextMonthDays().slice(0, lastWeekEmptyDays);
    return next.map((day) => {
      const date = new Date(this.nextMonth.year, this.nextMonth.monthIndex, day);
      const formattedDate = this.getFormattedDate(date);
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

  private generateFirstWeekEmptyDays() {
    const firstDayOfWeekIndex = new Date(
      this.currentMonth.year,
      this.currentMonth.monthIndex,
      1
    ).getDay() as WeekDayIndex;

    const firstDayOfWeekNumber = (
      firstDayOfWeekIndex === 0 ? 7 : firstDayOfWeekIndex
    ) as WeekDayNumber;
    return weekLookUp[firstDayOfWeekLookUp[this.firstDayOfWeekString]].emptyBoxesFirstWeek[
      firstDayOfWeekNumber
    ];
  }

  private generateLastWeekEmptyDays() {
    const lastDayOfWeekIndex = new Date(
      this.currentMonth.year,
      this.currentMonth.monthIndex + 1,
      0
    ).getDay() as WeekDayIndex;
    const lastDayOfWeekNumber = lastDayOfWeekIndex === 0 ? 7 : lastDayOfWeekIndex;
    return weekLookUp[firstDayOfWeekLookUp[this.firstDayOfWeekString]].emptyBoxesLastWeek[
      lastDayOfWeekNumber
    ];
  }

  private getFormattedDate(date: Date) {
    return `${date.getFullYear()}/${
      date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }/${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;
  }
}
