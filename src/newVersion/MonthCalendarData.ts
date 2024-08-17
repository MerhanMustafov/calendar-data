import { firstDayOfWeekLookUp, weekLookUp, FirstDayOfWeekString } from './constants';
import { MonthIndex, MonthNumber } from './types';

export class MonthCalendarData {
  private _defaultDate = new Date();
  private _defaultYear = this._defaultDate.getFullYear();

  private _prevYear: number = this._defaultDate.getFullYear() - 1;
  private _prevMonthIndex: MonthIndex = (this._defaultDate.getMonth() - 2) as MonthIndex;

  private _currYear: number = this._defaultDate.getFullYear();
  private _currMonthIndex: MonthIndex = (this._defaultDate.getMonth() - 1) as MonthIndex;

  private _nextYear: number = this._defaultDate.getFullYear() + 1;
  private _nextMonthIndex: MonthIndex = (this._defaultDate.getMonth() + 1) as MonthIndex;

  private _firstDayOfWeek: FirstDayOfWeekString = 'Mon';

  constructor(year?: number, monthNumber?: MonthNumber, firstDayOfWeek?: FirstDayOfWeekString) {
    this._currYear = year || this._currYear;
    this._currMonthIndex = monthNumber ? ((monthNumber - 1) as MonthIndex) : this._currMonthIndex;
    this._firstDayOfWeek = firstDayOfWeek || 'Mon';

    this.initPrevMonthData();
    this.initNextMothData();
  }

  private initPrevMonthData() {
    this._prevYear = this._currMonthIndex === 0 ? this._currYear - 1 : this._currYear;
    this._prevMonthIndex =
      this._currMonthIndex === 0 ? 11 : ((this._currMonthIndex - 1) as MonthIndex);
  }

  private initNextMothData() {
    this._nextYear = this._currMonthIndex === 11 ? this._currYear + 1 : this._currYear;
    this._nextMonthIndex =
      this._currMonthIndex === 11 ? 0 : ((this._currMonthIndex + 1) as MonthIndex);
  }

  generateData() {
    const prev = this.generatePrevMonthFormattedData();
    const curr = this.generateCurrMonthFormattedData();
    const next = this.generateNextMonthFormattedData();
    return { prev, curr, next };
  }

  private generatePrevMonthFormattedData() {
    const fweek = this.generateFirstWeekEmptyDays();
    const prev = this.generateArrayOfPrevMonthDays().reverse().slice(0, fweek).reverse();

    return prev.map((day) => {
      const date = new Date(this._prevYear, this._prevMonthIndex, day);
      const formattedDate = this.getFormattedDate(date);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;

      return {
        year: this._prevYear,
        monthNumber: this._prevMonthIndex + 1,
        day,
        date: formattedDate,
        isWeekend
      };
    });
  }
  private generateCurrMonthFormattedData() {
    const curr = this.generateArrayOfCurrMonthDays();
    return curr.map((day) => {
      const date = new Date(this._currYear, this._currMonthIndex, day);
      const formattedDate = this.getFormattedDate(date);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;

      return {
        year: this._currYear,
        monthNumber: this._currMonthIndex + 1,
        day,
        date: formattedDate,
        isWeekend
      };
    });
  }
  private generateNextMonthFormattedData() {
    const lweek = this.generateLastWeekEmptyDays();
    const next = this.generateArrayOfNextMonthDays().slice(0, lweek);
    return next.map((day) => {
      const date = new Date(this._nextYear, this._nextMonthIndex, day);
      const formattedDate = this.getFormattedDate(date);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;

      return {
        year: this._nextYear,
        monthNumber: this._nextMonthIndex + 1,
        day,
        date: formattedDate,
        isWeekend
      };
    });
  }

  private generateArrayOfPrevMonthDays() {
    const prevYear = this._currMonthIndex === 0 ? this._currYear - 1 : this._currYear;
    const prevMonthIndex =
      this._currMonthIndex === 0 ? 11 : ((this._currMonthIndex - 1) as MonthIndex);

    return this.getDaysArrayFor(prevYear, prevMonthIndex);
  }
  private generateArrayOfCurrMonthDays() {
    return this.getDaysArrayFor(this._currYear, this._currMonthIndex);
  }
  private generateArrayOfNextMonthDays() {
    const nextYear = this._currMonthIndex === 11 ? this._currYear + 1 : this._currYear;
    const nextMonthIndex =
      this._currMonthIndex === 11 ? 0 : ((this._currMonthIndex + 1) as MonthIndex);

    return this.getDaysArrayFor(nextYear, nextMonthIndex);
  }

  private generateFirstWeekEmptyDays() {
    const firstDayOfWeekNumber = new Date(this._currYear, this._currMonthIndex, 1).getDay();
    const fWeek = firstDayOfWeekNumber === 0 ? 7 : firstDayOfWeekNumber;
    return weekLookUp[firstDayOfWeekLookUp[this._firstDayOfWeek]].emptyBoxesFirstWeek[
      fWeek as 1 | 2 | 3 | 4 | 5 | 6 | 7
    ];
  }

  private generateLastWeekEmptyDays() {
    const lastDayOfWeekNumber = new Date(this._currYear, this._currMonthIndex + 1, 0).getDay();
    const lWeek = lastDayOfWeekNumber === 0 ? 7 : lastDayOfWeekNumber;
    return weekLookUp[firstDayOfWeekLookUp[this._firstDayOfWeek]].emptyBoxesLastWeek[
      lWeek as 1 | 2 | 3 | 4 | 5 | 6 | 7
    ];
  }

  private getFormattedDate(date: Date) {
    return `${date.getFullYear()}/${
      date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }/${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;
  }

  private getDaysArrayFor(year: number, monthIndex: MonthIndex) {
    const daysArray = [];
    const date = new Date(year, monthIndex, 1);

    while (date.getMonth() === monthIndex) {
      daysArray.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }

    return daysArray;
  }
}
