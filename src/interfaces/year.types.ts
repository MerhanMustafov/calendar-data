import { IMonthNumbersNormal, IDaysInMonth } from './month.types';
import { IWeekDaysString } from './week.types';

export type IYearData = {
  [key in IMonthNumbersNormal]: {
    daysInMonth: IDaysInMonth[];
    weekDaysStrings: IWeekDaysString;
  };
};
