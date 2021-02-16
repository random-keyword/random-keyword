export const Hour24Data = {
  hour: Array(24).fill(0).map((value, index) => value + index),
  minute: Array(60).fill(0).map((value, index) => value + index),
  second: Array(60).fill(0).map((value, index) => value + index),
};

export const CalendarData = {
  month: Array(12).fill(1).map((value, index) => value + index),
  day31: Array(31).fill(1).map((value, index) => value + index),
  day30: Array(30).fill(1).map((value, index) => value + index),
  day28: Array(28).fill(1).map((value, index) => value + index),
  day29: Array(29).fill(1).map((value, index) => value + index),
};