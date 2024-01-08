# calendar-data

<br />

Install using NPM

```
npm i calendar-data
```

<br />

Install using Yarn

```
yarn add calendar-data
```

## Video

[Video](https://github.com/MerhanMustafov/calendar-data/assets/76586375/d4f5ac7c-5b57-405f-b2c4-1afbe62a27d6)

[Open on Youtube](https://www.youtube.com/watch?v=WGA6uzkSRbk)

## Overview

TypeScript library that provides an easy-to-use and intuitive utility functions for retrieving calendar data. These functions aim to help you generate the data you need for a calendar in two ways - **monthly** or **yearly** based.

1. Monthly data retrieval happens via: `getDaysInMonth`
2. Yearly data retrieval happens via: `getYearData`

<br />

## Usage

### Importing the Library

```typescript
import { getDaysInMonth, getYearData } from 'calendar-data';
```

### Fn 1: `getDaysInMonth`

```typescript
getDaysInMonth(2021, 6, 'Mon');

// returns
{
    "daysInMonth": [
        {
            "yearNumber": 2021,
            "monthNumber": 6,
            "dayNumberInMonth": null,
            "isWeekendDay": false
        },
        {
            "yearNumber": 2021,
            "monthNumber": 6,
            "dayNumberInMonth": 1,
            "isWeekendDay": false
        },

        ....

        {
            "yearNumber": 2021,
            "monthNumber": 6,
            "dayNumberInMonth": 30,
            "isWeekendDay": false
        },
        {
            "yearNumber": 2021,
            "monthNumber": 6,
            "dayNumberInMonth": null,
            "isWeekendDay": false
        },
        {
            "yearNumber": 2021,
            "monthNumber": 6,
            "dayNumberInMonth": null,
            "isWeekendDay": false
        },
        {
            "yearNumber": 2021,
            "monthNumber": 6,
            "dayNumberInMonth": null,
            "isWeekendDay": false
        },
        {
            "yearNumber": 2021,
            "monthNumber": 6,
            "dayNumberInMonth": null,
            "isWeekendDay": false
        }
    ],
    "weekDaysStrings": [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ]
}
```

<br />

### Fn 2: `getYearData`

```typescript
getYearData(2021, 'Mon');

// returns
// The returned data is the same as getDaysInMonth but for all the months
{
  1:  {
        "daysInMonth": ...
        "weekDaysStrings": ...
      }

    ...

  12: {
        "daysInMonth": ...
        "weekDaysStrings": ...
      }
}
```
