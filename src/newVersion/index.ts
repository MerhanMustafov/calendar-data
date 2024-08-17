import { FirstDayOfWeekString } from './constants';
import { YearCalendarData } from './YearCalendarData';

export function getYearCalendarData(year?: number, firstDayOfWeek?: FirstDayOfWeekString) {
  return new YearCalendarData(year).setFirstDayOfWeek(firstDayOfWeek || 'Mon').generateData();
}
