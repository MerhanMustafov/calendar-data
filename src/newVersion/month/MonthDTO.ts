import { MonthIndex, MonthNumber, WeekDayString } from '../types';

export class MonthDTO {
  public year: number;
  public monthIndex: MonthIndex;
  public monthNumber: MonthNumber;
  public firstDayOfWeekString: WeekDayString = 'Mon';

  constructor(year: number, monthNumber: MonthNumber, firstDayOfWeek?: WeekDayString) {
    this.year = year;
    this.monthNumber = monthNumber;
    this.monthIndex = (monthNumber - 1) as MonthIndex;
    this.firstDayOfWeekString = firstDayOfWeek || 'Mon';
  }
}
