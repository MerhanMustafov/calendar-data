import { firstDayOfWeekLookUp, weekLookUp } from '../constants';
import { DateFormat, MonthIndex, WeekDayIndex, WeekDayNumber } from '../types';
import { MonthDTO } from './MonthDTO';

export class MonthUtils {
  public getFormattedDate({
    date,
    format,
    separator = '/'
  }: {
    date: Date;
    format: DateFormat;
    separator?: string;
  }) {
    const replaceSeparatorPattern = new RegExp('/', 'g');
    const year = String(date.getFullYear());
    const month = String(
      date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    );
    const day = String(date.getDate() < 10 ? `0${date.getDate()}` : date.getDate());
    return format
      .replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day)
      .replace(replaceSeparatorPattern, separator);
  }

  public getDaysArrayFor(year: number, monthIndex: MonthIndex) {
    const daysArray = [];
    const date = new Date(year, monthIndex, 1);

    while (date.getMonth() === monthIndex) {
      daysArray.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }

    return daysArray;
  }

  public getLastWeekNumberOfEmptyDays(month: MonthDTO) {
    const lastDayOfWeekIndex = new Date(
      month.year,
      month.monthIndex + 1,
      0
    ).getDay() as WeekDayIndex;
    const lastDayOfWeekNumber = (
      lastDayOfWeekIndex === 0 ? 7 : lastDayOfWeekIndex
    ) as WeekDayNumber;

    return weekLookUp[firstDayOfWeekLookUp[month.firstDayOfWeekString]].emptyBoxesLastWeek[
      lastDayOfWeekNumber
    ];
  }

  public getFirstWeekNumberOfEmptyDays(month: MonthDTO) {
    const firstDayOfWeekIndex = new Date(month.year, month.monthIndex, 1).getDay() as WeekDayIndex;

    const firstDayOfWeekNumber = (
      firstDayOfWeekIndex === 0 ? 7 : firstDayOfWeekIndex
    ) as WeekDayNumber;
    return weekLookUp[firstDayOfWeekLookUp[month.firstDayOfWeekString]].emptyBoxesFirstWeek[
      firstDayOfWeekNumber
    ];
  }
}
