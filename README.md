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

## Overview
Typecript library that provides easy to use intuitive utility function for retrieving calendar data. These functions aim to help you generate the data you need for a calendar in two ways - **monthly** or **yearly** based. 

1. Monthly data retrieval happens via: `getDaysInMonth`
2. Yearly data retrieval happens via: `getYearData`

<br />

## Usage
### Importing the Library
```typescript
import {getDaysInMonth, getYearData} from 'calendar-data';
```
### Fn 1: `getDaysInMonth`
```typescript
getDaysInMonth(
  year: number,
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  firstDayOfWeek: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun"
)

// returns 
```
<br />

### Fn 2: `getYearData`
```typescript
getYearData(
  year: number,
  firstDayOfWeek: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun"
)
// returns 
```
