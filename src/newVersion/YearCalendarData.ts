import { firstDayOfWeekLookUp, weekLookUp, FirstDayOfWeekString } from './constants';
import { MonthCalendarData } from './MonthCalendarData';

export class YearCalendarData {
  private currDate = new Date();
  private _currYear: number = this.currDate.getFullYear();

  private _firstDayOfWeek: FirstDayOfWeekString = 'Mon';
  constructor(year?: number) {
    this._currYear = year || this.currDate.getFullYear();
  }

  generateData() {
    return {
      weekStrings: weekLookUp[firstDayOfWeekLookUp[this._firstDayOfWeek]].dayString,
      data: {
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
      }
    };
  }

  setFirstDayOfWeek(firstDayOfWeek: FirstDayOfWeekString) {
    this._firstDayOfWeek = firstDayOfWeek;
    return this;
  }
}
