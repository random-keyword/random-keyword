import React from 'react';
import { CalendarData, TimeData } from '@data/TimeData';
import { getKeyword } from '@utils/getKeyword';

export const count = {
  time: '24시간',
  calendar: '365일',
};

export const getTime = () => {
  const { hour, minute, second, } = TimeData;

  const hourItem = getKeyword(hour);
  const minuteItem = getKeyword(minute);
  const secondItem = getKeyword(second);

  return (
    <>
      <span className='blue'>{hourItem}:{minuteItem}:{secondItem}</span>
    </>
  );
};

export const getCalendar = () => {
  const { month, day28, day29, day30, day31, } = CalendarData;
  let dayItem;

  const monthItem = getKeyword(month);
  const day28Item = getKeyword(day28);
  const day29Item = getKeyword(day29);
  const day30Item = getKeyword(day30);
  const day31Item = getKeyword(day31);
  const d2 = getKeyword([ 1, 2, ]);

  if (monthItem === 1) {
    dayItem = day31Item;
  } else if (monthItem === 2) {
    if (d2 === 1) {
      dayItem = day28Item;
    } else if (d2 === 2) {
      dayItem = day29Item;
    }
  } else if (monthItem === 3) {
    dayItem = day31Item;
  } else if (monthItem === 4) {
    dayItem = day30Item;
  } else if (monthItem === 5) {
    dayItem = day31Item;
  } else if (monthItem === 6) {
    dayItem = day30Item;
  } else if (monthItem === 7) {
    dayItem = day31Item;
  } else if (monthItem === 8) {
    dayItem = day31Item;
  } else if (monthItem === 9) {
    dayItem = day30Item;
  } else if (monthItem === 10) {
    dayItem = day31Item;
  } else if (monthItem === 11) {
    dayItem = day30Item;
  } else if (monthItem === 12) {
    dayItem = day31Item;
  }

  return (
    <>
      <span className='blue'>{monthItem}월 {dayItem}일</span>
    </>
  );
};