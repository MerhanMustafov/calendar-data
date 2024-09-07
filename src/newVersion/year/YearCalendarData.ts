import { WeekDayString } from '../types';
import { MonthCalendarData } from '../month/MonthCalendarData';

export class YearCalendarData {
  private currDate = new Date();
  private currYear: number = this.currDate.getFullYear();

  private firstDayOfWeek: WeekDayString;
  constructor(year?: number, firstDayOfWeek?: WeekDayString) {
    this.currYear = year || this.currDate.getFullYear();
    this.firstDayOfWeek = firstDayOfWeek || 'Mon';
  }

  generateData() {
    return {
      1: new MonthCalendarData(this.currYear, 1, this.firstDayOfWeek).generateData(),
      2: new MonthCalendarData(this.currYear, 2, this.firstDayOfWeek).generateData(),
      3: new MonthCalendarData(this.currYear, 3, this.firstDayOfWeek).generateData(),
      4: new MonthCalendarData(this.currYear, 4, this.firstDayOfWeek).generateData(),
      5: new MonthCalendarData(this.currYear, 5, this.firstDayOfWeek).generateData(),
      6: new MonthCalendarData(this.currYear, 6, this.firstDayOfWeek).generateData(),
      7: new MonthCalendarData(this.currYear, 7, this.firstDayOfWeek).generateData(),
      8: new MonthCalendarData(this.currYear, 8, this.firstDayOfWeek).generateData(),
      9: new MonthCalendarData(this.currYear, 9, this.firstDayOfWeek).generateData(),
      10: new MonthCalendarData(this.currYear, 10, this.firstDayOfWeek).generateData(),
      11: new MonthCalendarData(this.currYear, 11, this.firstDayOfWeek).generateData(),
      12: new MonthCalendarData(this.currYear, 12, this.firstDayOfWeek).generateData()
    };
  }
}
