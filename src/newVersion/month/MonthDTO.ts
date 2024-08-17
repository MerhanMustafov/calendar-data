import { MonthIndex, MonthNumber } from '../types';

export class MonthDTO {
  public year: number;
  public monthIndex: MonthIndex;
  public monthNumber: MonthNumber;

  constructor(year: number, monthNumber: MonthNumber) {
    this.year = year;
    this.monthNumber = monthNumber;
    this.monthIndex = (monthNumber - 1) as MonthIndex;
  }
}
