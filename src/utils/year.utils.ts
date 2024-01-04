import { IMonthNumbersNormal } from '../interfaces/month.types';
import { IYearData } from '../interfaces/year.types';
import { getDaysInMonth } from '../utils/month.utils';

/**
 * @Description
 * Returns an object with all the months of the year and needed data for each month.
 *
 * @param year - ex: 2021 | 2022 | 2023 | ...
 * @param firstDayOfWeek - "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun"
 * @returns {IYearData}
 * @example getYearData(2021, 'Mon') // returns {
 * 1: {
 *      daysInMonth: [{monthNumber: 1, dayNumberInMonth: 1, isWeekendDay: false},
 *                    {monthNumber: 1, dayNumberInMonth: 2, isWeekendDay: true}, ...],
 *      weekDayStrings: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
 * 2: { daysInMonth: [{monthNumber: 2, dayNumberInMonth: 1, isWeekendDay: false},
 *                    {monthNumber: 2, dayNumberInMonth: 2, isWeekendDay: true}, ...],
 *      weekDayStrings: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] }, ... }
 */

export function getYearData(
  year: number,
  firstDayOfWeek: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'
) {
  const yearData: IYearData | unknown = {};

  for (let i = 1; i <= 12; i++) {
    (yearData as IYearData)[i as IMonthNumbersNormal] = getDaysInMonth(
      year,
      i as IMonthNumbersNormal,
      firstDayOfWeek
    );
  }

  return yearData as IYearData;
}
