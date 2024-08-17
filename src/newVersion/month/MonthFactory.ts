import { MonthNumber } from '../types';
import { MonthDTO } from './MonthDTO';

export class MonthFactory {
  createCurrentMonth(year: number, monthNumber: MonthNumber) {
    return new MonthDTO(year, monthNumber);
  }

  createPreviouseMonthFrom(currMonth: MonthDTO) {
    const prevYear = currMonth.monthNumber === 1 ? currMonth.year - 1 : currMonth.year;
    const prevMonth =
      currMonth.monthNumber === 1 ? 12 : ((currMonth.monthNumber - 1) as MonthNumber);
    return new MonthDTO(prevYear, prevMonth);
  }

  createNextMonthFrom(currMonth: MonthDTO) {
    const nextYear = currMonth.monthNumber === 12 ? currMonth.year + 1 : currMonth.year;
    const nextMonth =
      currMonth.monthNumber === 12 ? 1 : ((currMonth.monthNumber + 1) as MonthNumber);
    return new MonthDTO(nextYear, nextMonth);
  }
}
