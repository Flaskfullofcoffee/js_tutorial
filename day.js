let now = new Date();
alert(`Happy ${dayName(now)}!`);
let dayName = (date) => {
  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday',
                        'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfTheWeek[date..getDay()];
}