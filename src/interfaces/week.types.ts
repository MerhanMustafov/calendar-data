// Week days types
export type IWeekDaysNormal = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type IWeekDaysZeroBased = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type IWeekDaysStringLong =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';
export type IWeekDaysStringShort = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';
export type IWeekDaysLookUpShort = {
  [key in IWeekDaysZeroBased]: {
    dayIndex: IWeekDaysZeroBased;
    dayString: IWeekDaysStringShort;
  }[];
};
export type IWeekDaysLookUpLong = {
  [key in IWeekDaysZeroBased]: {
    dayIndex: IWeekDaysZeroBased;
    dayString: IWeekDaysStringLong;
  }[];
};

export type IWeekDaysString = IWeekDaysStringShort[] | IWeekDaysStringLong[];

export type IFirstDayOfWeekLookUp = {
  [key in IWeekDaysStringShort]: IWeekDaysZeroBased;
};
