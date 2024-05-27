import { firstDayOfWeekLookUp, weekLookUp, FirstDayOfWeekString } from './constants';

type MonthNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type MonthIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

class MonthCalendarData {
  private currDate = new Date();

  private _prevYear: number = this.currDate.getFullYear() - 1;
  private _prevMonthIndex: MonthIndex = (this.currDate.getMonth() - 1) as MonthIndex;

  private _currYear: number = this.currDate.getFullYear();
  private _currMonthIndex: MonthIndex = this.currDate.getMonth() as MonthIndex;

  private _nextYear: number = this.currDate.getFullYear() + 1;
  private _nextMonthIndex: MonthIndex = (this.currDate.getMonth() + 1) as MonthIndex;

  private _firstDayOfWeek: FirstDayOfWeekString = 'Mon';

  constructor(year?: number, monthNumber?: MonthNumbers, firstDayOfWeek?: FirstDayOfWeekString) {
    this.initializeData = {
      year: year || this._currYear,
      monthIndex: monthNumber ? ((monthNumber - 1) as MonthIndex) : this._currMonthIndex
    };
    this._firstDayOfWeek = firstDayOfWeek || 'Mon';
  }

  private set initializeData(data: { year: number; monthIndex: MonthIndex }) {
    this._currYear = data.year;
    this._currMonthIndex = data.monthIndex;

    this._prevYear = this._currMonthIndex === 0 ? this._currYear - 1 : this._currYear;
    this._prevMonthIndex =
      this._currMonthIndex === 0 ? 11 : ((this._currMonthIndex - 1) as MonthIndex);

    this._nextYear = this._currMonthIndex === 11 ? this._currYear + 1 : this._currYear;
    this._nextMonthIndex =
      this._currMonthIndex === 11 ? 0 : ((this._currMonthIndex + 1) as MonthIndex);
  }

  generateData() {
    const prev = this.generatePrevMonthFormatedData();
    const curr = this.generateCurrMonthFormatedData();
    const next = this.generateNextMonthFormatedData();
    return { prev, curr, next };
  }

  private generateArrayOfPrevMonthDays() {
    const daysInPrevMonth = new Date(this._prevYear, this._prevMonthIndex + 1, 0).getDate();
    return Array.from({ length: daysInPrevMonth }, (_, i) => i + 1);
  }

  private generateArrayOfDaysInMonth() {
    const daysInMonth = new Date(this._currYear, this._currMonthIndex + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }

  private generateArrayOfNextMonthDays() {
    const daysInNextMonth = new Date(this._nextYear, this._nextMonthIndex + 1, 0).getDate();
    return Array.from({ length: daysInNextMonth }, (_, i) => i + 1);
  }

  private generateFirstWeekEmptyDays() {
    const firstDayOfWeekNumber = new Date(this._currYear, this._currMonthIndex, 1).getDay();
    return weekLookUp[firstDayOfWeekLookUp[this._firstDayOfWeek]].emptyBoxesFirstWeek[
      firstDayOfWeekNumber as 1 | 2 | 3 | 4 | 5 | 6 | 7
    ];
  }

  private generateLastWeekEmptyDays() {
    const lastDayOfWeekNumber = new Date(this._currYear, this._currMonthIndex + 1, 0).getDay();
    return weekLookUp[firstDayOfWeekLookUp[this._firstDayOfWeek]].emptyBoxesLastWeek[
      lastDayOfWeekNumber as 1 | 2 | 3 | 4 | 5 | 6 | 7
    ];
  }

  private generatePrevMonthFormatedData() {
    const fweek = this.generateFirstWeekEmptyDays();
    const prev = this.generateArrayOfPrevMonthDays().reverse().slice(0, fweek).reverse();
    return prev.map((day) => {
      const date = new Date(this._prevYear, this._prevMonthIndex, day);
      const formatedDate = this.getFormatedDate(date);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;

      return {
        year: this._prevYear,
        monthNumber: this._prevMonthIndex + 1,
        day,
        date: formatedDate,
        isWeekend
      };
    });
  }

  private generateCurrMonthFormatedData() {
    const curr = this.generateArrayOfDaysInMonth();
    return curr.map((day) => {
      const date = new Date(this._currYear, this._currMonthIndex, day);
      const formatedDate = this.getFormatedDate(date);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;

      return {
        year: this._currYear,
        monthNumber: this._currMonthIndex + 1,
        day,
        date: formatedDate,
        isWeekend
      };
    });
  }

  private generateNextMonthFormatedData() {
    const lweek = this.generateLastWeekEmptyDays();
    const next = this.generateArrayOfNextMonthDays().slice(0, lweek);
    return next.map((day) => {
      const date = new Date(this._nextYear, this._nextMonthIndex, day);
      const formatedDate = this.getFormatedDate(date);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;

      return {
        year: this._nextYear,
        monthNumber: this._nextMonthIndex + 1,
        day,
        date: formatedDate,
        isWeekend
      };
    });
  }

  private getFormatedDate(date: Date) {
    return `${date.getFullYear()}/${
      date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }/${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;
  }
}

class YearCalendarData {
  private currDate = new Date();
  private _currYear: number = this.currDate.getFullYear();

  private _firstDayOfWeek: FirstDayOfWeekString = 'Mon';
  constructor(year?: number) {
    this._currYear = year || this.currDate.getFullYear();
  }

  generateData() {
    return {
      1: new MonthCalendarData(this._currYear, 1, this._firstDayOfWeek).generateData(),
      2: new MonthCalendarData(this._currYear, 2, this._firstDayOfWeek).generateData(),
      3: new MonthCalendarData(this._currYear, 3, this._firstDayOfWeek).generateData(),
      4: new MonthCalendarData(this._currYear, 4, this._firstDayOfWeek).generateData(),
      5: new MonthCalendarData(this._currYear, 5, this._firstDayOfWeek).generateData(),
      6: new MonthCalendarData(this._currYear, 6, this._firstDayOfWeek).generateData(),
      7: new MonthCalendarData(this._currYear, 7, this._firstDayOfWeek).generateData(),
      8: new MonthCalendarData(this._currYear, 8, this._firstDayOfWeek).generateData(),
      9: new MonthCalendarData(this._currYear, 9, this._firstDayOfWeek).generateData(),
      10: new MonthCalendarData(this._currYear, 10, this._firstDayOfWeek).generateData(),
      11: new MonthCalendarData(this._currYear, 11, this._firstDayOfWeek).generateData(),
      12: new MonthCalendarData(this._currYear, 12, this._firstDayOfWeek).generateData()
    };
  }

  setFirstDayOfWeek(firstDayOfWeek: FirstDayOfWeekString) {
    this._firstDayOfWeek = firstDayOfWeek;
    return this;
  }
}

const year = new YearCalendarData().setFirstDayOfWeek('Mon');
console.log(JSON.stringify(year.generateData()['1'], null, 2));
