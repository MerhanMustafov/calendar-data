import { MonthUtils } from '../month/MonthUtils';

describe('MonthUtils:', () => {
  let monthUtils: MonthUtils;

  beforeAll(() => {
    monthUtils = new MonthUtils();
  });
  describe('Test number of days for a month in a provided year (METHOD: getDaysArrayFor)', () => {
    describe('2020 (leap year)', () => {
      let yearNumber: number;
      beforeAll(() => {
        yearNumber = 2020;
      });
      it('January', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 0);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('February', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 1);
        expect(arrayOfDaysInAMonth).toHaveLength(29);
      });
      it('March', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 2);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('April', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 3);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('May', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 4);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('June', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 5);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('July', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 6);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('August', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 7);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('September', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 8);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('October', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 9);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('November', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 10);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('December', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 11);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
    });
    describe('2021', () => {
      let yearNumber: number;
      beforeAll(() => {
        yearNumber = 2021;
      });
      it('January', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 0);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('February', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 1);
        expect(arrayOfDaysInAMonth).toHaveLength(28);
      });
      it('March', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 2);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('April', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 3);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('May', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 4);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('June', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 5);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('July', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 6);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('August', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 7);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('September', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 8);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('October', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 9);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('November', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 10);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('December', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 11);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
    });
    describe('2022', () => {
      let yearNumber: number;
      beforeAll(() => {
        yearNumber = 2022;
      });
      it('January', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 0);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('February', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 1);
        expect(arrayOfDaysInAMonth).toHaveLength(28);
      });
      it('March', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 2);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('April', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 3);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('May', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 4);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('June', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 5);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('July', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 6);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('August', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 7);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('September', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 8);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('October', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 9);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('November', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 10);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('December', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 11);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
    });
    describe('2023', () => {
      let yearNumber: number;
      beforeAll(() => {
        yearNumber = 2023;
      });
      it('January', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 0);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('February', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 1);
        expect(arrayOfDaysInAMonth).toHaveLength(28);
      });
      it('March', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 2);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('April', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 3);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('May', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 4);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('June', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 5);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('July', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 6);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('August', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 7);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('September', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 8);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('October', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 9);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('November', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 10);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('December', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 11);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
    });
    describe('2024 (leap year)', () => {
      let yearNumber: number;
      beforeAll(() => {
        yearNumber = 2024;
      });
      it('January', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 0);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('February', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 1);
        expect(arrayOfDaysInAMonth).toHaveLength(29);
      });
      it('March', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 2);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('April', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 3);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('May', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 4);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('June', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 5);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('July', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 6);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('August', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 7);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('September', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 8);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('October', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 9);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('November', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 10);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('December', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 11);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
    });
    describe('2025', () => {
      let yearNumber: number;
      beforeAll(() => {
        yearNumber = 2025;
      });
      it('January', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 0);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('February', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 1);
        expect(arrayOfDaysInAMonth).toHaveLength(28);
      });
      it('March', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 2);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('April', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 3);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('May', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 4);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('June', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 5);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('July', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 6);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('August', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 7);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('September', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 8);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('October', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 9);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('November', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 10);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('December', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 11);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
    });
    describe('2026', () => {
      let yearNumber: number;
      beforeAll(() => {
        yearNumber = 2026;
      });
      it('January', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 0);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('February', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 1);
        expect(arrayOfDaysInAMonth).toHaveLength(28);
      });
      it('March', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 2);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('April', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 3);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('May', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 4);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('June', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 5);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('July', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 6);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('August', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 7);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('September', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 8);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('October', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 9);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
      it('November', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 10);
        expect(arrayOfDaysInAMonth).toHaveLength(30);
      });
      it('December', () => {
        const arrayOfDaysInAMonth = monthUtils.getDaysArrayFor(yearNumber, 11);
        expect(arrayOfDaysInAMonth).toHaveLength(31);
      });
    });
  });
});
